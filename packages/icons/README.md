## Contribution guide.

We welcome contributions from everyone. Here are a few ways you can help.

## Intro

Before you start the best thing you could do is to read the icon's package [overview](https://design-system.giosg.app/?path=/docs/icons-overview--docs) in Storybook to familiarize yourself with the package and the main key points.

### ➕ How to add a new icon

1. Create a new branch
2. Ask your designer to provide you a new icon or pick an already added one from the design system figma.
3. The icon should follow some rules designers have documented. For example, it should have `main`, `alt` or `accent` data-id attributes on corresponding parts of an svg and the `height` should be 24px and `viewport` property is present. In practice, you should go to `./src/svg/` to compare with the existing set.
4. Put the provided svg into `./src/svg/`.
5. Run `pnpm svg` - that will trigger the pipeline to produce a component.
6. Update tests/screenshots if needed.
7. Commit your changes if you are fine with them.
8. Read the general rules on how to create changesets in [publishing settings](/README.md#Publishing)
