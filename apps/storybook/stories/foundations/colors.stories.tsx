import type { Meta, StoryObj } from "@storybook/react";
import { ColorCell } from "./colorCell/colorCell";
import styles from "./color.module.css";

const meta: Meta = {
	title: "Foundations/Colors",
};

export default meta;

type Story = StoryObj;

const SolidColorPalette = ["Grey", "Purple", "Mint", "Pink", "Orange", "Red", "Green", "Yellow", "Blue"] as const;
const AlphaColorPalette = ["Black", "White", "Purple", "Mint", "Orange", "Red", "Green", "Yellow", "Blue"] as const;

const getSolidColorPaletteProp = (name: string) => {
	return {
		prefix: `--gds-ref-color-solid-${name.toLocaleLowerCase()}-`,
		gradation: [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
	};
};

const getAlphaColorPaletteProp = (name: string) => {
	return {
		prefix: `--gds-ref-color-alpha-${name.toLocaleLowerCase()}-`,
		gradation: [10, 20, 40, 60, 80],
	};
};

export const Palette: Story = {
	parameters: {
		options: { showPanel: false },
		controls: { hideNoControlsWarning: true },
		layout: "centered",
	},
	decorators: [
		(Story) => {
			document.body.classList.add(styles.body);
			return <Story />;
		},
	],
	render: () => {
		const SolidColorMap = SolidColorPalette.map((colorName) => {
			return { ...getSolidColorPaletteProp(colorName), name: colorName };
		});
		const AlphaColorMap = AlphaColorPalette.map((colorName) => {
			return { ...getAlphaColorPaletteProp(colorName), name: colorName };
		});

		return (
			<div className={styles.canvas}>
				<div className={styles.row}>
					<div className={styles.cellContainer}>
						<ColorCell label="White" variablePrefix="--gds-ref-color-solid-basics-white" />
						<ColorCell label="Black" variablePrefix="--gds-ref-color-solid-basics-black" />
					</div>
				</div>
				{SolidColorMap.map(({ gradation, name, prefix }) => {
					return (
						<div className={styles.row} key={name}>
							<h3>{name}</h3>
							<div className={styles.cellContainer} key={name}>
								{gradation.map((value) => {
									return <ColorCell key={value} value={value} variablePrefix={prefix} />;
								})}
							</div>
						</div>
					);
				})}
				{AlphaColorMap.map(({ gradation, name, prefix }) => {
					return (
						<div className={styles.row} key={name}>
							<h3>Alpha {name}</h3>
							<div className={styles.alphaCellContainer} key={name}>
								{gradation.map((value) => {
									return <ColorCell key={value} value={value} variablePrefix={prefix} />;
								})}
							</div>
						</div>
					);
				})}
			</div>
		);
	},
};
