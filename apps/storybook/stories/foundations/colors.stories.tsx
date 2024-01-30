import type { Meta, StoryObj } from "@storybook/react";
import styles from "./color.module.css";

const meta: Meta = {
	title: "Foundations/Colors",
};

export default meta;

type Story = StoryObj;

interface ColorCellProps {
	variablePrefix: string;
	value?: number | string;
	label?: string | number;
}

const SolidColorPalette = ["Grey", "Purple", "Mint", "Pink", "Orange", "Red", "Green", "Yellow", "Blue"] as const;

const getSolidColorPaletteProp = (name: string): { prefix: string; gradation: number[] } => {
	return {
		prefix: `--gds-ref-color-solid-${name.toLocaleLowerCase()}-`,
		gradation: [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
	};
};

function ColorCell(props: ColorCellProps): JSX.Element {
	const { label = "", value = "", variablePrefix } = props;
	return (
		<div className={styles.colorCell} style={{ backgroundColor: `var(${variablePrefix}${value})` }}>
			<div>{label || value}</div>
		</div>
	);
}

export const Palette: Story = {
	parameters: {
		controls: { hideNoControlsWarning: true },
	},
	// decorators: [
	// 	(Story) => {
	// 		document.body.setAttribute("data-theme", "dark");
	// 		return <Story />;
	// 	},
	// ],
	render: () => {
		const SolidColorMap = SolidColorPalette.map((colorName) => {
			return { ...getSolidColorPaletteProp(colorName), name: colorName };
		});

		return (
			<div className={styles.canvas}>
				<div className={styles.container}>
					<div className={styles.rowContainer}>
						<div className={styles.row}>
							<ColorCell label="White" variablePrefix="--gds-ref-color-solid-basics-white" />
							<ColorCell label="Black" variablePrefix="--gds-ref-color-solid-basics-black" />
						</div>
					</div>
					{SolidColorMap.map(({ gradation, name, prefix }) => {
						return (
							<div className={styles.rowContainer} key={name}>
								<h3>{name}</h3>
								<div className={styles.row} key={name}>
									{gradation.map((value) => {
										return <ColorCell key={value} value={value} variablePrefix={prefix} />;
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	},
};
