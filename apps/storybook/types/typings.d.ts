import type { Globals as OriginalGlobals } from "@storybook";

declare module "@storybook/types" {
  declare interface Globals extends OriginalGlobals {
    theme: "dark" | "light";
  }
}
