import StyleDictionary from "style-dictionary";
import { registerTransforms } from "@tokens-studio/sd-transforms";

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
registerTransforms(StyleDictionary, {
	expand: {
		composition: true,
		typography: false,
		border: false,
		shadow: false,
	},
	excludeParentKeys: true,
});

// example value transform, which just returns the token as is
StyleDictionary.registerTransform({
	type: "value",
	name: "myCustomTransform",
	matcher: (token) => {},
	transformer: (token) => {
		return token; // <-- transform as needed
	},
});

// format helpers from style-dictionary
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

// example css format
StyleDictionary.registerFormat({
	name: "myCustomFormat",
	formatter: function ({ dictionary, file, options }) {
		const { outputReferences } = options;
		return `${fileHeader({ file })}:root {
${formattedVariables({ format: "css", dictionary, outputReferences })}
}`;
	},
});

const styleDictionary = StyleDictionary.extend({
	source: ["token.json"],
	platforms: {
		css: {
			transformGroup: "tokens-studio",
			prefix: "sd",
			buildPath: "build/css/",
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
