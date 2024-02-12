const StyleDictionary = require("style-dictionary");

StyleDictionary.registerTransform({
	name: "attribute/cti",
	type: "attribute",
	transformer: (prop) => {
		return {
			category: prop.path[0],
			type: prop.path[1],
			item: prop.path[2],
			subitem: prop.path[3],
			state: prop.path[4],
		};
	},
});

StyleDictionary.registerFormat({
	name: "css/variables",
	formatter: function (dictionary) {
		return dictionary.allProperties
			.map((prop) => {
				const varNames = [];
				let isAfterGDS = false;

				for (const item of prop.path) {
					if (item == "gds") {
						isAfterGDS = true;
						varNames.push(item.toLowerCase());
						continue;
					}

					if (isAfterGDS) {
						varNames.push(item.toLowerCase());
					}
				}

				const varName = varNames.join("-");
				return `--${varName}: ${prop.value};`;
			})
			.join("\n");
	},
});

const styleDictionary = StyleDictionary.extend({
	source: ["token.json"],
	platforms: {
		css: {
			transformGroup: "css",
			buildPath: "build/",
			files: [
				{
					destination: "variables.css",
					format: "css/variables",
				},
			],
		},
	},
});

styleDictionary.buildAllPlatforms();
