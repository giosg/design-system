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

  # Rename and copy files into the temporary directory
  find ./apps/storybook/__screenshots__ -type f | while read file; do
    base_name=$(basename "$file")

    # Apply the specific renaming logic
    if [[ "$base_name" == *"-chromium"* ]]; then
      new_name=$(echo "$base_name" | sed 's/-picture-/-colors-width-size-modified-picture-/')
    elif [[ "$base_name" == *"-firefox"* ]]; then
      new_name=$(echo "$base_name" | sed 's/-picture-/-dark-theme-picture-/')
    elif [[ "$base_name" == *"-webkit"* ]]; then
      new_name=$(echo "$base_name" | sed 's/-picture-/-default-picture-/')
    else
      new_name="$base_name"  # Default, no change if criteria not met
    fi

    cp "$file" "$temp_dir/$new_name"
  done

  tar -czvf playwright_screenshots.tar.gz -C "$temp_dir" . || exit 1
  echo "Done playwright_screenshots.tar.gz with renamed screenshots."

  # Clean up temporary directory
  rm -rf "$temp_dir"
fi
