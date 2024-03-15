#!/bin/bash

if [[ $1 == "--help" ]] || [[ $1 == "-h" ]]; then
  echo "This script builds a zip archive from the current screenshots made by playwright";
  exit 0;
fi


# Check if the directory ./apps/storybook/__screenshots__ exists
if [ ! -d "./apps/storybook/__screenshots__" ]; then
  echo "Directory with current screenshots not found in the file tree."
  exit 1
else
  # Create a tar archive of PNG files in the screenshots directory
  tar -czvf ./apps/storybook/__screenshots__/current_screenshots.tar.gz ./apps/storybook/__screenshots__/ || exit 1
  echo "Done ./apps/storybook/__screenshots__/current_screenshots.tar.gz with all current screenshots generated"
fi

