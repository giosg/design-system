#!/bin/bash

# 1 - Split tokens
node src/split-tokens.mjs

# 2 - Generate css from split tokens
node src/style-dictionary.mjs

# 3 - Run post-css plugins
node src/main.cjs