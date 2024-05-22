const propTypesTemplate = (ast, context) => {
  const { tpl } = context;
  const { imports, interfaces, componentName, props, jsx, exports } = ast;

  props[0] = {
    type: "ObjectPattern",
    properties: [
      {
        type: "ObjectProperty",
        key: {
          type: "Identifier",
          name: "color",
        },
        value: {
          type: "Identifier",
          name: "color",
        },
      },
      {
        type: "ObjectProperty",
        key: {
          type: "Identifier",
          name: "colorAcc",
        },
        value: {
          type: "Identifier",
          name: "colorAcc",
        },
      },
      {
        type: "ObjectProperty",
        key: {
          type: "Identifier",
          name: "colorAlt",
        },
        value: {
          type: "Identifier",
          name: "colorAlt",
        },
      },
      {
        type: "ObjectProperty",
        key: {
          type: "Identifier",
          name: "style",
        },
        value: {
          type: "Identifier",
          name: "style",
        },
      },
      {
        type: "RestElement",
        argument: {
          type: "Identifier",
          name: "props",
        },
      },
    ],
    typeAnnotation: {
      type: "TSTypeAnnotation",
      typeAnnotation: {
        type: "TSTypeReference",
        typeName: {
          type: "Identifier",
          name: "SvgComponentProps",
        },
      },
    },
  };

  const updImports = [imports[1]];

  jsx.openingElement.attributes.push({
    type: "JSXAttribute",
    name: { type: "JSXIdentifier", name: "style" },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "ObjectExpression",
        properties: [
          {
            type: "SpreadElement",
            argument: {
              type: "CallExpression",
              callee: {
                type: "Identifier",
                name: "generateIconCssVars",
              },
              arguments: [
                {
                  type: "ObjectExpression",
                  properties: [
                    {
                      type: "ObjectProperty",
                      key: {
                        type: "Identifier",
                        name: "color",
                      },
                      value: {
                        type: "Identifier",
                        name: "color",
                      },
                    },
                    {
                      type: "ObjectProperty",
                      key: {
                        type: "Identifier",
                        name: "colorAcc",
                      },
                      value: {
                        type: "Identifier",
                        name: "colorAcc",
                      },
                    },
                    {
                      type: "ObjectProperty",

                      key: {
                        type: "Identifier",
                        name: "colorAlt",
                      },
                      value: {
                        type: "Identifier",
                        name: "colorAlt",
                      },
                    },
                  ],
                },
              ],
            },
          },
          {
            type: "SpreadElement",
            argument: {
              type: "Identifier",
              name: "style",
            },
          },
        ],
      },
    },
  });

  return tpl`
${updImports}
import { type SvgComponentProps,  generateIconCssVars } from "../types";

${interfaces}

function ${componentName}(${props}): JSX.Element {
  return ${jsx};
}

${exports}`;
};

module.exports = propTypesTemplate;
