# Tree Shaking Tester App

## Description
Tree Shaking Tester is a tool to check how well your code performs in terms of tree-shaking

## Usage
To use the Tree Shaking Tester App, follow these steps:

1. Go to `package.json` and add the desired package to dependencies
   ```json
   "dependencies": {
      "@giosg-design-system/icons": "workspace:*"
    }
2. Also in `package.json` we need to treat the package as a bundled product not a library. For that we have to add following lines for both module and common-js targets
   ```json
     "targets": {
      "module": {
        "optimize": true,
        "includeNodeModules": [
          "@giosg-design-system/icons"
        ]
      },
      "main": {
        "optimize": true,
        "includeNodeModules": [
          "@giosg-design-system/icons"
        ]
      }
  },

3. Run `pnpm i` to install the library to the tree-shaker app.
4. Import parts of the library you install into `src/index.tsx`.
5. Run `pnpm shake` script which will build the files.
6. Go to `/dist` there you will find both .cjs and .mjs built files.
7. Open them up and analyze that only relevant parts of your library are included.