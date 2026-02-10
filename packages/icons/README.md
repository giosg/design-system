## Contribution guide

We welcome contributions from everyone. Here are a few ways you can help.

## Intro

Before you start the best thing you could do is to read the icon's package [overview](https://design-system.giosg.app/?path=/docs/icons-overview--docs) in Storybook to familiarize yourself with the package and the main key points.

### ➕ How to add a new icon

1. **Create a new branch.**
2. **Obtain the icon SVG:**
   - Get the icon from a designer or pick one from the Figma design system.
   - Icons must follow official design guidelines (e.g., 24px height).
3. **Format the SVG code:**
   Open the SVG in a code editor and ensure it follows this structure:

   - **Root `<svg>`:** Must have `fill="none"`, `height="24"`, and a `viewBox="0 0 24 24"`.
   - **Main Path:** Must have `id="main"` and `fill="#2A293A"`.
   - **Grouping:** If the icon has multiple `<path>` elements, they should be wrapped in a `<g>` tag.
   - **Secondary Paths:** You may use `id="alt"` or `id="accent"` for other parts of the icon.

   **Example of a correct SVG:**

   ```xml
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" ...>
     <!-- For a single path icon -->
     <path id="main" fill="#2A293A" d="..." />

     <!-- If multiple paths are needed, wrap them in a <g> -->
     <g id="main" fill="#2A293A">
       <path d="..." />
       <path d="..." />
     </g>
   </svg>
   ```

   _Tip: Always compare your SVG structure with existing ones in `./src/svg/`._

4. **Add the file:**
   - Put the SVG file into `./src/svg/`.
5. **Generate components:**
   - Run `pnpm svg` inside the icons package (~packages/icons). This triggers the pipeline to convert SVGs into React components.
6. **Verify and Update:**

   - Update tests and screenshots if necessary.

   To update a screenshot, you can use the `test-docker` command. This will run the Playwright tests in a Docker container and update the screenshot if needed.
   To update the screenshot manually, download the test results from the Playwright report in the PR comment and copy the `picture-actual` file from the `playwright_screenshots/test-results` folder to the `storybook/__screenshots__` folder one by one and replace the existing file.

7. **Submit:**
   - Commit your changes and open a pull request.
   - Follow the [publishing settings](/README.md#Publishing) for creating changesets.
