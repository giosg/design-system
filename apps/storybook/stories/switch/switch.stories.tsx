import type { Meta, StoryObj } from "@storybook/react";
import * as Switch from "@giosg/design-system-switch";
// import styles from "./switch.module.css";

const meta: Meta = {
	title: "Switch/Base",
};

export default meta;

type Story = StoryObj;

export const Variants: Story = {
	parameters: {
		options: { showPanel: false },
		controls: { hideNoControlsWarning: true },
		layout: "centered",
	},
	render: () => {
		return (
			<div>
				<label>Label</label>
				<Switch.Root>
					<Switch.Thumb />
				</Switch.Root>
				<Switch.Root disabled>
					<Switch.Thumb />
				</Switch.Root>
			</div>
		);
	},
};
