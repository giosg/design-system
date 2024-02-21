# Giosg Design System
![](./assets/giosg-color.svg)

## 🎓 Philosophy
We build the design system following the next principles:
 - **Modularity**. You don't have to use it all at once. Each piece is consumable individually.
 - **Low maintenance - high value**. We don't include irrelevant or specific functionality. We don't cater to every use case. We test only what we have control over.
 - **Incremental adoption**. You don't have to discard the old to use the new. They can coexist
 - **Inversion of control**. As a consumer, you have complete control over all the "meat" of the components in the design system. All low-level functionality is available.
 - **Tree-shakable**. Our components are designed to be tree-shakable.
 - **Open design**. Our components are building blocks. You can combine them in countless ways to create higher-level components. You are the architect of the final product.
- **Accessibility**. Components adhere to the WAI-ARIA design patterns where possible.
- **Low dependency**. We aim to minimize external and cross-package dependencies to the lowest possible value.

## 🧦 What belongs and what doesn't
Design systems should only contain pure and presentational components. These components deal with how UI appears, respond exclusively to props, do not contain app-specific business logic, and are agnostic to how data loads. These properties are essential in allowing the component to be reusable.

Design systems aren’t the superset of every component library in an organization. That would be a headache to keep track of.

App-specific components that contain business logic should not be included because that hamstrings reuse by requiring consumer projects to have identical business constraints.

Omit one-offs that aren’t currently being reused. Even if you hope they become part of the design system one day, nimble teams avoid maintaining excess code when possible.


## 🛠️ Tech stack
For the majority of components the tech stack is [radix-ui](https://www.radix-ui.com/) backed up by plain css.

### Why radix-ui ?
Radix is one of the industry-leading open-source libraries providing unstyled primitives. It's better to read the Radix [documentation](https://www.radix-ui.com/primitives/docs/overview/introduction) to get familiar with what it offers. Radix fits perfectly with the philosophy for the design system. It's a well-tested and well-maintained library written by outstanding people with a focus on accessibility.

Most of the Radix components boil down to pure React and have no dependencies.

### Why pure CSS ? 
There are multiple reasons to support this approach. I'll provide you with the most of them
 - **No framework dependency**. Crucial for ease of maintenance and adoption, you don't have to specify peer dependencies in your project, match versions, or undergo migration to new versions. You also don't have to discard your current solution, as CSS is just CSS.
 - **No runtime overhead**. Compared to other solutions like CSS-in-JS, plain CSS incurs zero runtime overhead and avoids DOM manipulations, resulting in faster operations than CSS-in-JS. Less JS - faster operation. You can check one of the articles about this [here](https://pustelto.com/blog/css-vs-css-in-js-perf/) 
 - **Long-term caching**. CSS is very easy to get long-term cached by the browser.

## 🏛️ Project structure
Project is a monorepo run by [turborepo](https://turbo.build/). Shortly we have a structure that look like that:

```
└── apps/
    ├── storybook/
    ├── tree-shaker/    
└── packages
    ├── @eslint-config/
    ├── @stylelint-config/
    ├── foundation/
    └── button/    
├── package.json
├── README.md
```

The main folders here are app and packages. Packages are consumable distributables which can be publishable or private. There is a naming convention that packages prefixed with @ are private and for local usage only. For example `@eslint-config`. For non-private  packages which will be npm-publishable the convention is to name them without @ prefix like `button`.
The apps in apps/ folder are there to consume packages from packages/ folder.

## 📐 Testing

For testing solutions, ![](./assets/playwright.svg) [Playwright](https://playwright.dev/) is used. As a rule of thumb, we should test only what we have control over and trust all the third-party providers that they test their own code. Therefore, the testing part of the project will mostly involve screenshot testing.

Playwright is very flexible in that sense, as it is able to perform various operations, and screenshot testing is just a minor part of its functionality.

Playwright uses [pixelmatch](https://github.com/mapbox/pixelmatch) library under the hood for performing screenshot comparison.

The main benefit of using Playwright is its ability to consistently test across three main browser engines (Chromium, Firefox, WebKit) in Docker environments. 