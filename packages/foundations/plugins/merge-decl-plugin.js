const postcss = require("postcss");

module.exports = (opts = {}) => {
  const rootDeclarations = [];
  const sysDeclarations = [];
  const importRules = [];

  return {
    postcssPlugin: "merge-decl-plugin",
    Once(root) {
      root.walkAtRules("import", (rule) => {
        importRules.push(rule);
        rule.remove();
      });
    },
    Rule(rule) {
      if (rule.selector === ":root") {
        rule.walkDecls((decl) => {
          if (decl.prop.includes("-sys-")) {
            sysDeclarations.push(decl);
          } else {
            rootDeclarations.push(decl);
          }
          decl.remove();
        });

        rule.remove();
      }
    },
    OnceExit(root) {
      const newRule = postcss.rule({ selector: ":root" });

      // Get the properties in alphabetical order

      const rootProps = rootDeclarations.sort(sort);

      const sysProps = sysDeclarations.sort(sort);

      // Append the root declarations
      for (const decl of rootProps) {
        newRule.append(decl);
      }

      // Append the sys declarations
      for (const decl of sysProps) {
        newRule.append(decl);
      }

      root.prepend(newRule);

      // Prepend all @import rules at the top
      importRules.reverse().forEach((rule) => {
        root.prepend(rule);
      });
    },
  };
};

function sort(a, b) {
  const aValueHasVar = a.value.includes("var(");
  const bValueHasVar = b.value.includes("var(");

  if (aValueHasVar && !bValueHasVar) {
    return 1;
  } else if (!aValueHasVar && bValueHasVar) {
    return -1;
  } else {
    return 0;
  }
}

module.exports.postcss = true;
