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
      { label: "Text", modificators: ["default", "dim", "inverted", "onLight", "onDark", "link"] },
      {
        label: "Text/state",
        modificators: ["disabled", "hover", "pressed", "active"],
      },
      {
        label: "Text/brand",
        modificators: ["primary", "secondary", "tertiary", "quaternary"],
      },
      {
        label: "Text/status",
        modificators: ["positive", "negative", "info", "warning"],
      },
    ],
  },
  {
    token: "icon",
    groups: [
      { label: "Icon", modificators: ["default", "dim", "inverted", "onLight", "onDark", "link"] },
      {
        label: "Icon/state",
        modificators: ["disabled", "hover", "pressed", "active"],
      },
      {
        label: "Icon/brand",
        modificators: ["primary", "secondary", "tertiary", "quaternary"],
      },
      {
        label: "Icon/status",
        modificators: ["positive", "negative", "info", "warning"],
      },
    ],
  },
  {
    token: "border",
    groups: [
      { label: "Border", modificators: ["default", "dim", "inverted", "onLight", "onDark", "link", "transparent"] },
      { label: "Border/state", modificators: ["disabled", "hover", "pressed", "active", "focused"] },
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
      { label: "Border/status", modificators: ["positive", "negative", "info", "warning"] },
    ],
  },
  {
    token: "layer",
    groups: [
      {
        label: "Layer",
        modificators: ["default", "softest", "softer", "soft", "mildest", "stronger", "inverted", "canvas", "viewport"],
      },
      {
        label: "Layer/state",
        modificators: ["hover", "pressed", "selected", "active", "hover-active", "disabled"],
      },
      {
        label: "Layer/status",
        modificators: [
          "positive.default",
          "positive.dim",
          "positive.state.hover",
          "positive.state.pressed",
          "negative.default",
          "negative.dim",
          "negative.state.hover",
          "negative.state.pressed",
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
        label: "Layer/primary",
        modificators: [
          "primary.softest",
          "primary.softer",
          "primary.soft",
          "primary.default",
          "primary.stronger",
          "primary.extreme",
        ],
      },
      {
        label: "Layer/primary/state",
        modificators: ["primary.state.hover", "primary.state.pressed"],
      },
      {
        label: "Layer/secondary",
        modificators: ["secondary.default", "secondary.dim"],
      },
      {
        label: "Layer/tertiary",
        modificators: ["tertiary.default", "tertiary.dim"],
      },
      {
        label: "Layer/quaternary",
        modificators: ["tertiary.default", "tertiary.dim"],
      },
    ],
  },
  {
    token: "layer",
    groups: [
      {
        label: "Layer/alpha",
        modificators: [
          "alpha.default",
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
    ],
  },
];
