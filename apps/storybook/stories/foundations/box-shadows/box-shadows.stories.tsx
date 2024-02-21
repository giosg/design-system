import type { Meta, StoryObj } from "@storybook/react";
import { VariableTooltip } from "../../../components/variableTooltip";
import styles from "./box-shadows.module.css";

const meta: Meta = {
	title: "Foundations/Box Shadows",
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
			<div className={styles.container} data-testid="box-shadows">
				<div className={styles.rowContainer}>
					<h3>Down</h3>
					<div className={styles.row}>
						{["xs", "s", "m", "l", "xl"].map((value) => {
							return (
								<div className={styles.itemContainer} key={value}>
									<VariableTooltip variableName={`--gds-sys-shadow-down-${value}`}>
										<div className={styles.item} style={{ boxShadow: `var(--gds-sys-shadow-down-${value})` }} />
									</VariableTooltip>
									<h3>{value}</h3>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.rowContainer}>
					<h3>Up</h3>
					<div className={styles.row}>
						{["xs", "s", "m", "l", "xl"].map((value) => {
							return (
								<div className={styles.itemContainer} key={value}>
									<VariableTooltip variableName={`--gds-sys-shadow-down-${value}`}>
										<div className={styles.item} style={{ boxShadow: `var(--gds-sys-shadow-up-${value})` }} />
									</VariableTooltip>
									<h3>{value}</h3>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	},
};
