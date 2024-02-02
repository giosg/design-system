import { dirname, join } from "path";

function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")));
}

const config = {
	stories: ["../stories/**/*.stories.tsx"],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-docs"),
	],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	core: {},

	async viteFinal(config, { configType }) {
		// customize the Vite config here
		return {
			...config,
			define: { "process.env": {} },
			resolve: {
				alias: [],
			},
		};
	},
};

export default config;
