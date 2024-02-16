import StyleDictionaryPackage from "style-dictionary";
import { registerTransforms } from "@tokens-studio/sd-transforms";

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
registerTransforms(StyleDictionaryPackage, {
	expand: {
		composition: true,
		typography: false,
		border: false,
		shadow: false,
	},
	excludeParentKeys: true,
});

const themes = ["light", "dark"];

// CUSTOM TRANSFORMS
const pixelToRem = ["borderRadius", "sizing", "spacing", "fontSizes", "lineHeights", "paragraphSpacing", "borderWidth"];

StyleDictionaryPackage.registerTransform({
	name: "size/pxToRem",
	type: "value",
	matcher: (token) => {
		return pixelToRem.includes(token.type);
	},
	transformer: (token) => {
		return `${token.value / 16}rem`;
	},
});

// https://tobiasahlin.com/blog/layered-smooth-box-shadows/
StyleDictionaryPackage.registerTransform({
	name: "css/layered-box-shadows",
	type: "value",
	matcher: (token) => {
		return token.type === "boxShadow";
	},
	transformer: (token) => {
		if (Array.isArray(token.value) && token.value !== null) {
			return token.value
				.map((prop) => {
					const ret = [];
					// destructure shadow values from original token value
					const { x, y, blur, spread, color } = prop;

					ret.push(`${x}px ${y}px ${blur}px ${spread}px ${color}`);
					return ret.join(" ");
				})
				.join(", ");
		} else {
			// fallback for simple box shadows
			const { x, y, blur, spread, color } = token.value;

			return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
		}
	},
});

StyleDictionaryPackage.registerTransform({
	name: "typography/shorthand",
	type: "value",
	transitive: true,
	matcher: (token) => token.type === "typography" && typeof token.value === "object" && token.value !== null,
	transformer: (token) => {
		const { value } = token;
		return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`;
	},
});

StyleDictionaryPackage.registerTransformGroup({
	name: "tokens-css",
	transforms: [
		"attribute/cti",
		"name/cti/kebab",
		"color/hsl-4",
		"typography/shorthand",
		"css/layered-box-shadows",
		"size/pxToRem",
	],
});

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(theme) {
	let selector = `:root, [data-theme="light"]`;
	if (theme === "dark") {
		selector = `[data-theme="dark"]`;
	}

	return {
		source: [`tokens/tokens-${theme}.json`],
		platforms: {
			css: {
				transformGroup: "tokens-css",
				buildPath: `build/css/`,
				prefix: "--gds",
				files: [
					{
						destination: `${theme}.css`,
						format: "css/variables",
						options: {
							outputReferences: true,
							selector,
						},
					},
				],
			},
		},
	};
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR EACH THEME
themes.map(function (theme) {
	console.log("\n==============================================");
	console.log(`\nProcessing: [${theme}]`);

	const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

	StyleDictionary.buildAllPlatforms();

	console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
