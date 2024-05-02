var postcss = require("postcss");

module.exports = (opts = {}) => {
  let darkThemeDeclarations = [];
  let lightThemeDeclarations = [];
  let commonDeclarations = [];

  return {
    postcssPlugin: "import-system",
    Declaration(decl) {
      const parentSelector = decl.parent.selector;

      if (parentSelector.includes('[data-theme="dark"]')) {
        darkThemeDeclarations.push(decl);
        decl.remove();
      } else if (parentSelector.includes('[data-theme="light"]')) {
        lightThemeDeclarations.push(decl);
        decl.remove();
      }
    },
    Rule: {
      exit(rule) {
        if (rule.nodes.length === 0) {
          rule.remove();
        }
      },
    },
    OnceExit(root, { Rule }) {
      commonDeclarations.sort((a, b) => a.prop.localeCompare(b.prop));
      lightThemeDeclarations.sort((a, b) => a.prop.localeCompare(b.prop));
      darkThemeDeclarations.sort((a, b) => a.prop.localeCompare(b.prop));

      lightThemeDeclarations.unshift(postcss.decl({ prop: "color-scheme", value: "light" }));
      darkThemeDeclarations.unshift(postcss.decl({ prop: "color-scheme", value: "dark" }));

      // Compare declarations in light and dark arrays
      darkThemeDeclarations = darkThemeDeclarations.filter((darkDecl) => {
        const matchingLightDecl = lightThemeDeclarations.find(
          (lightDecl) => lightDecl.prop === darkDecl.prop && lightDecl.value === darkDecl.value,
        );

        if (matchingLightDecl) {
          // If a matching declaration is found, move it to the common declarations array
          commonDeclarations.push(matchingLightDecl);
          // Remove the matching declaration from the light theme array
          lightThemeDeclarations = lightThemeDeclarations.filter((lightDecl) => lightDecl !== matchingLightDecl);
          // Return false to remove the declaration from the dark theme array
          return false;
        }

        // If no matching declaration is found, keep the declaration in the dark theme array
        return true;
      });

      // Remove all existing rules and declarations
      root.removeAll();

      if (commonDeclarations.length > 0) {
        let rootRule = new Rule({
          selector: ":root",
          nodes: commonDeclarations,
        });
        root.append(rootRule);
      }

      if (lightThemeDeclarations.length > 0) {
        let lightThemeRule = new Rule({
          selector: ':root,[data-theme="light"]',
          nodes: lightThemeDeclarations,
        });
        root.append(postcss.comment({ text: "Light theme" }));
        root.append(lightThemeRule);
      }
      if (darkThemeDeclarations.length > 0) {
        let darkThemeRule = new Rule({
          selector: '[data-theme="dark"]',
          nodes: darkThemeDeclarations,
        });
        root.append(postcss.comment({ text: "Dark theme" }));
        root.append(darkThemeRule);
      }
      console.log(
        "Semantics declarations",
        "Light:",
        lightThemeDeclarations.length,
        "Dark:",
        darkThemeDeclarations.length,
        "Common:",
        commonDeclarations.length,
        "Total:",
        lightThemeDeclarations.length + darkThemeDeclarations.length + commonDeclarations.length,
      );
    },
  };
};
