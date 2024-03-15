#!/bin/bash

if [[ $1 == "--help" ]] || [[ $1 == "-h" ]]; then
  echo "This script builds a zip archive from the current screenshots made by playwright";
  exit 0;
fi

if [ ! -d "./apps/storybook/test-results" ]; then
  echo "Directory with current screenshots not found in the file tree."
  exit 1
else
  mkdir ./apps/storybook/tmp
  tar -czvf ./apps/storybook/tmp/current_screenshots.tar.gz ./apps/storybook/test-results || exit 1
  echo "Done ./apps/storybook/tmp/current_screenshots.tar.gz with all current screenshots generated"
fi

