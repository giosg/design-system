import type { Meta, StoryObj } from "@storybook/react";
import { VariableTooltip } from "../../../components/variableTooltip";
import styles from "./border-radiuts.module.css";

const meta: Meta = {
	title: "Foundations/Border Radius",
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
			<div className={styles.container}>
				<div className={styles.row}>
					{[
						"none",
						"radius-3xs",
						"radius-2xs",
						"radius-xs",
						"radius-s",
						"radius-m",
						"radius-l",
						"radius-xl",
						"radius-2xl",
						"radius-3xl",
					].map((value) => {
						return (
							<div className={styles.itemContainer} key={value}>
								<VariableTooltip variableName={`--gds-sys-radius-${value}`}>
									<div className={styles.item} style={{ borderRadius: `var(--gds-sys-radius-${value})` }} />
								</VariableTooltip>
								<h3>{value}</h3>
							</div>
						);
					})}
				</div>
			</div>
		);
	},
};
