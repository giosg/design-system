#!/bin/bash

if [[ $1 == "--help" ]] || [[ $1 == "-h" ]]; then
  echo "This script builds a tar archive from the screenshots made by playwright";
  exit 0;
fi

if [ ! -d "./apps/storybook/test-results" ]; then
  echo "Directory with tests screenshot results not found in the file tree."
  exit 1
else
  tar -czvf ./screenshots.tar.gz ./apps/storybook/test-results || exit 1
  echo "Done screenshots.tar.gz with all screenshots generated"
fi

