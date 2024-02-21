import type { Meta, StoryObj } from "@storybook/react";
import type { HTMLAttributes } from "react";
import { ColorCell } from "./colorCell/colorCell";
import styles from "./colors.module.css";

const meta: Meta = {
	title: "Foundations/Colors",
	parameters: {
		options: { showPanel: false },
		controls: { hideNoControlsWarning: true },
		layout: "centered",
	},
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
	render: () => {
		const SolidColorMap = SolidColorPalette.map((colorName) => {
			return { ...getSolidColorPaletteProp(colorName), name: colorName };
		});
		const AlphaColorMap = AlphaColorPalette.map((colorName) => {
			return { ...getAlphaColorPaletteProp(colorName), name: colorName };
		});

		return (
			<div className={styles.paletteContainer} data-testid="palette">
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

const ShortOptionList = ["strong", "medium", "mild"] as const;
const FullOptionList = ["strongest", "stronger", "strong", "medium", "mild", "milder", "mildest"] as const;

export const Themes: Story = {
	render: () => {
		return (
			<div className={styles.themes}>
				<ThemeCanvas data-testid="light-theme">
					<h1 className={styles.themeHeader}>Light Theme</h1>
				</ThemeCanvas>
				<ThemeCanvas data-testid="dark-theme" data-theme="dark">
					<h1 className={styles.themeHeader}>Dark Theme</h1>
				</ThemeCanvas>
			</div>
		);
	},
};

function ThemeCanvas(props: HTMLAttributes<HTMLDivElement>) {
	const { children, ...restProps } = props;
	return (
		<div className={styles.themeContainer} {...restProps}>
			{children}
			<div className={styles.section}>
				<h1 className={styles.headerXXL}>Foreground</h1>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Neutral</h3>
					{generateCellContainer("--gds-sys-color-fg-neutral-", [
						"default",
						"strong",
						"medium",
						"mild",
						"milder",
						"mildest",
						"inverted",
					])}
				</div>
				<div className={styles.horizontalRow}>
					<div className={styles.row}>
						<h3 className={styles.headerM}>Primary</h3>

						{generateCellContainer("--gds-sys-color-fg-primary-", ShortOptionList)}
					</div>
					<div className={styles.row}>
						<h3 className={styles.headerM}>Tertiary</h3>
						{generateCellContainer("--gds-sys-color-fg-tertiary-", ShortOptionList)}
					</div>
				</div>
				<div className={styles.horizontalRow}>
					<div className={styles.row}>
						<h3 className={styles.headerM}>Secondary</h3>
						{generateCellContainer("--gds-sys-color-fg-secondary-", ShortOptionList)}
					</div>
					<div className={styles.row}>
						<h3 className={styles.headerM}>Quaternary</h3>
						{generateCellContainer("--gds-sys-color-fg-quaternary-", ShortOptionList)}
					</div>
				</div>
			</div>
			<div className={styles.section}>
				<h1 className={styles.headerXXL}>Background</h1>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Neutral</h3>
					{generateCellContainer("--gds-sys-color-bg-neutral-", [
						"default",
						"mildest",
						"milder",
						"mild",
						"medium",
						"strong",
						"inverted",
					])}
				</div>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Primary</h3>
					{generateCellContainer("--gds-sys-color-bg-primary-", FullOptionList)}
				</div>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Secondary</h3>

					{generateCellContainer("--gds-sys-color-bg-secondary-", FullOptionList)}
				</div>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Tertiary</h3>

					{generateCellContainer("--gds-sys-color-bg-tertiary-", FullOptionList)}
				</div>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Quaternary</h3>

					{generateCellContainer("--gds-sys-color-bg-quaternary-", FullOptionList)}
				</div>
			</div>
			<div className={styles.section}>
				<h1 className={styles.headerXXL}>Status</h1>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Positive</h3>
					{generateCellContainer("--gds-sys-color-status-positive-", FullOptionList)}
				</div>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Warning</h3>

					{generateCellContainer("--gds-sys-color-status-warning-", FullOptionList)}
				</div>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Negative</h3>
					{generateCellContainer("--gds-sys-color-status-negative-", FullOptionList)}
				</div>
				<div className={styles.row}>
					<h3 className={styles.headerM}>Info</h3>
					{generateCellContainer("--gds-sys-color-status-info-", FullOptionList)}
				</div>
			</div>
			<div className={styles.section}>
				<h1 className={styles.headerXXL}>Border</h1>
				<div className={styles.row} style={{ width: "50%" }}>
					<h3 className={styles.headerM}>Neutral</h3>
					{generateCellContainer("--gds-sys-color-border-neutral-", ["inverted", "milder", "mild", "strong"])}
				</div>
				<div className={styles.row} style={{ width: "50%" }}>
					<h3 className={styles.headerM}>Status</h3>
					{generateCellContainer("--gds-sys-color-border-status-", ["info", "negative", "positive", "warning"])}
				</div>
				<div className={styles.row} style={{ width: "50%" }}>
					<h3 className={styles.headerM}>State</h3>
					{generateCellContainer("--gds-sys-color-border-state-", ["focused", "hovered", "pressed"])}
				</div>
			</div>
			<div className={styles.section}>
				<h1 className={styles.headerXXL}>Overlay</h1>
				<div className={styles.row} style={{ width: "50%" }}>
					<h3 className={styles.headerM}>Status</h3>
					{generateCellContainer("--gds-sys-color-overlay-", ["tint", "mild", "strong"], true)}
				</div>
			</div>
		</div>
	);
}

const generateCellContainer = (prefix: string, pallette: readonly (string | number)[], alpha?: boolean) => {
	const containerStyles = alpha ? styles.alphaCellContainer : styles.cellContainer;
	return (
		<div className={containerStyles}>
			{pallette.map((value) => {
				return <ColorCell key={value} value={value} variablePrefix={prefix} />;
			})}
		</div>
	);
};
