#!/bin/bash

if [[ $1 == "--help" ]] || [[ $1 == "-h" ]]; then
  echo "This script builds a tar archive from the screenshots made by playwright";
  exit 0;
fi

if [ ! -d "./apps/storybook/__screenshots__" ]; then
  echo "Directory with playwright screenshots not found in the file tree"
  exit 1
else
  tar -czvf playwright_screenshots.tar.gz -C ./apps/storybook/ __screenshots__ test-results || exit 1
  echo "Done playwright_screenshots.tar.gz with all screenshots generated"
fi
