const propTypesTemplate = (ast, context) => {
  const { tpl } = context;
  const { imports, interfaces, componentName, props, jsx, exports } = ast;

  props[0] = {
    type: "ObjectPattern",
    properties: [
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

  return tpl`
${updImports}
import type { SvgComponentProps } from "../types";

${interfaces}

function ${componentName}(${props}): JSX.Element {
  return ${jsx};
}

${exports}`;
};

module.exports = propTypesTemplate;
