interface TokenGroup {
  label: string;
  modificators: string[];
}

interface Token {
  token: string;
  groups: TokenGroup[];
}

export const TOKENS: Token[] = [
  {
    token: "text",
    groups: [
      { label: "Text", modificators: ["default", "dim", "inverted", "onLight", "onDark"] },
      {
        label: "Text/interactive",
        modificators: [
          "interactive.default",
          "interactive.hover",
          "interactive.pressed",
          "interactive.active",
          "interactive.active-hover",
          "interactive.disabled",
          "interactive.focused",
        ],
      },
      {
        label: "Text/brand",
        modificators: ["primary.default", "secondary.default", "tertiary.default", "quaternary.default"],
      },
      {
        label: "Text/status",
        modificators: ["positive.default", "negative.default", "info.default", "warning.default"],
      },
    ],
  },
  {
    token: "icon",
    groups: [
      { label: "Icon", modificators: ["default", "dim", "inverted", "onLight", "onDark"] },
      {
        label: "Icon/interactive",
        modificators: [
          "interactive.default",
          "interactive.hover",
          "interactive.pressed",
          "interactive.active",
          "interactive.active-hover",
          "interactive.disabled",
          "interactive.focused",
        ],
      },
      {
        label: "Icon/brand",
        modificators: ["primary.default", "secondary.default", "tertiary.default", "quaternary.default"],
      },
      {
        label: "Icon/status",
        modificators: ["positive.default", "negative.default", "info.default", "warning.default"],
      },
    ],
  },
  {
    token: "border",
    groups: [
      { label: "Border", modificators: ["default", "dim", "inverted", "onLight", "onDark", "transparent"] },
      {
        label: "Border/interactive",
        modificators: [
          "interactive.default",
          "interactive.hover",
          "interactive.pressed",
          "interactive.active",
          "interactive.active-hover",
          "interactive.disabled",
          "interactive.focused",
        ],
      },
      {
        label: "Border/brand",
        modificators: [
          "primary.default",
          "primary.dim",
          "secondary.default",
          "secondary.dim",
          "tertiary.default",
          "tertiary.dim",
          "quaternary.default",
          "quaternary.dim",
        ],
      },
      {
        label: "Border/status",
        modificators: ["positive.default", "negative.default", "info.default", "warning.default"],
      },
    ],
  },
  {
    token: "layer",
    groups: [
      {
        label: "Layer",
        modificators: [
          "default",
          "softest",
          "softer",
          "soft",
          "mildest",
          "stronger",
          "inverted",
          "canvas",
          "viewport",
          "hover",
          "pressed",
        ],
      },
      {
        label: "Layer/interactive",
        modificators: [
          "interactive.default",
          "interactive.hover",
          "interactive.pressed",
          "interactive.active",
          "interactive.active-hover",
          "interactive.disabled",
          "interactive.focused",
        ],
      },
      {
        label: "Layer/primary",
        modificators: [
          "primary.default",
          "primary.softest",
          "primary.softer",
          "primary.soft",
          "primary.stronger",
          "primary.extreme",
        ],
      },
      {
        label: "Layer/brand",
        modificators: [
          "secondary.default",
          "secondary.dim",
          "tertiary.default",
          "tertiary.dim",
          "quaternary.default",
          "quaternary.dim",
        ],
      },
      {
        label: "Layer/status",
        modificators: [
          "positive.default",
          "positive.dim",
          "positive.hover",
          "positive.pressed",
          "negative.default",
          "negative.dim",
          "negative.hover",
          "negative.pressed",
          "info.default",
          "info.dim",
          "warning.default",
          "warning.dim",
        ],
      },
    ],
  },
  {
    token: "layer",
    groups: [
      {
        label: "Layer/alpha",
        modificators: [
          "alpha.overlay",
          "alpha.inverted",
          "alpha.primary",
          "alpha.secondary",
          "alpha.tertiary",
          "alpha.quaternary",
        ],
      },
      {
        label: "Layer/random",
        modificators: ["random.red", "random.yellow", "random.green", "random.blue", "random.purple", "random.pink"],
      },
      {
        label: "Layer/gradient",
        modificators: [
          "gradient.lava",
          "gradient.flame",
          "gradient.grass",
          "gradient.sunset",
          "gradient.lime",
          "gradient.charcoal",
        ],
      },
    ],
  },
  {
    token: "chart",
    groups: [
      {
        label: "Chart/berry",
        modificators: ["berry.node", "berry.label", "berry.hover", "berry.flow"],
      },
      {
        label: "Chart/mustard",
        modificators: ["mustard.node", "mustard.label", "mustard.hover", "mustard.flow"],
      },
      {
        label: "Chart/grape",
        modificators: ["grape.node", "grape.label", "grape.hover", "grape.flow"],
      },
      {
        label: "Chart/cherry",
        modificators: ["cherry.node", "cherry.label", "cherry.hover", "cherry.flow"],
      },
    ],
  },
  {
    token: "chart",
    groups: [
      {
        label: "Chart/orange",
        modificators: ["orange.node", "orange.label", "orange.hover", "orange.flow"],
      },
      {
        label: "Chart/plum",
        modificators: ["plum.node", "plum.label", "plum.hover", "plum.flow"],
      },
      {
        label: "Chart/goal",
        modificators: ["goal.node", "goal.label", "goal.pill", "goal.border"],
      },
      {
        label: "Chart/mint",
        modificators: ["mint.node", "mint.label", "mint.hover", "mint.flow"],
      },
    ],
  },
];
