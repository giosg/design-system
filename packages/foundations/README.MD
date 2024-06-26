## Intro

Before you start the best thing you could do is to read the foundations package [overview](https://design-system.giosg.app/?path=/docs/foundations-overview--docs) in Storybook to familiarize yourself with the package and the main key points.

### 🔄 How to update existing tokens

#### Figma design tokens are automatically synced with this [github repository](https://github.com/M-Castellarnau/DesignTokens/tree/master).

1. Create a new branch
2. Copy updated `tokens.json` file and replace existing one in this project
3. Run `pnpm build` - that will trigger the script to split tokens into light and dark themes and generate `index.css` with updated variables
4. Verify output and update storybook components if needed
5. Update tests/screenshots if needed
6. Commit your changes if you are fine with them
7. Read the general rules on how to create changesets in [publishing settings](/README.md#Publishing)

### ⁉️ Resolving-Referencing -ref- tokens.

In the design-system we have two levels of nesting in `tokens.json` `ref` and `sys`. Reference level tokens are just building blocks to compose system level tokens. **They should not be used by users directly**.

In automation scripts we resolve the end value of sys tokens and remove ref tokens from the final output.

- Resolving and filtering ref tokens. ( Currently enabled )
![filtering refs](./assets/filter-refs.png)

- Keeping and referencing ref tokens.
  ![keeping refs](./assets/keep-refs.png)