import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Default story",
};

export default meta;

type Story = StoryObj;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	render: (props) => (
		<div {...props} onClick={(): void => {}}>
			Hello
		</div>
	),
};
