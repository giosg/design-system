#!/bin/bash

if [[ $1 == "--help" ]] || [[ $1 == "-h" ]]; then
  echo "This script builds a tar archive from the screenshots made by Playwright, renaming them to match the expected naming convention.";
  exit 0;
fi

if [ ! -d "./apps/storybook/__screenshots__" ]; then
  echo "Directory with Playwright screenshots not found in the file tree";
  exit 1;
else
  temp_dir=$(mktemp -d)
  diff_dir="./apps/storybook/__screenshots_diff__"
  mkdir -p "$diff_dir"

  # Rename and copy files into the temporary directory
  find ./apps/storybook/__screenshots__ -type f | while read file; do
    base_name=$(basename "$file")

    if [[ "$base_name" == *"-chromium"* ]]; then
      new_name=$(echo "$base_name" | sed 's/-picture-/-dark-theme-default-picture-/')
    elif [[ "$base_name" == *"-firefox"* ]]; then
      new_name=$(echo "$base_name" | sed 's/-picture-/-theme-colors-picture-/')
    elif [[ "$base_name" == *"-webkit"* ]]; then
      new_name=$(echo "$base_name" | sed 's/-picture-/-default-picture-/')
    else
      new_name="$base_name"  # No change if criteria not met
    fi

    # Copy the renamed file to the temp directory
    cp "$file" "$temp_dir/$new_name"
  done

  echo "Generating diffs..."
  for ref_file in ./apps/storybook/__screenshots__/reference/*; do
    base_name=$(basename "$ref_file")
    actual_file="./apps/storybook/__screenshots__/$base_name"
    
    if [ -f "$actual_file" ]; then
      diff_output="$diff_dir/diff-$base_name"
      compare "$ref_file" "$actual_file" "$diff_output" || echo "No diff for $base_name"
    fi
  done

  # Create tar archive of renamed files
  tar -czvf playwright_screenshots.tar.gz -C "$temp_dir" . || exit 1
  echo "Done: playwright_screenshots.tar.gz created with renamed screenshots."

  # Clean up temporary directory
  rm -rf "$temp_dir"
fi
