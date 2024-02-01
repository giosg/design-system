import type { Meta, StoryObj } from "@storybook/react";
import styles from "./typography.module.css";

const meta: Meta = {
	title: "Foundations/Typography",
	parameters: {
		options: { showPanel: false },
		controls: { hideNoControlsWarning: true },
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj;

const text = (
	<span>
		Lorem ipsum dolor sit amet,
		<br /> consectetur adipiscing elit.
	</span>
);

// ------------------------------Headings--------------------------------
const titleLines = [
	{
		comp: <h1 style={{ font: `var(--gds-sys-font-default-title-xxl-900)` }}>{text}</h1>,
		name: "H1/900",
		size: "30/36",
	},
	{
		comp: <h1 style={{ font: `var(--gds-sys-font-default-title-xxl-700)` }}>{text}</h1>,
		name: "H1/700",
		size: "30/36",
	},
	{
		comp: <h2 style={{ font: `var(--gds-sys-font-default-title-xl-900)` }}>{text}</h2>,
		name: "H2/900",
		size: "26/32",
	},
	{
		comp: <h2 style={{ font: `var(--gds-sys-font-default-title-xl-700)` }}>{text}</h2>,
		name: "H2/700",
		size: "26/32",
	},
	{
		comp: <h3 style={{ font: `var(--gds-sys-font-default-title-l-900)` }}>{text}</h3>,
		name: "H3/900",
		size: "22/26",
	},
	{
		comp: <h3 style={{ font: `var(--gds-sys-font-default-title-l-700)` }}>{text}</h3>,
		name: "H3/700",
		size: "22/26",
	},
	{
		comp: <h4 style={{ font: `var(--gds-sys-font-default-title-m-900)` }}>{text}</h4>,
		name: "H4/900",
		size: "18/22",
	},
	{
		comp: <h4 style={{ font: `var(--gds-sys-font-default-title-m-700)` }}>{text}</h4>,
		name: "H4/700",
		size: "18/22",
	},
	{
		comp: <h5 style={{ font: `var(--gds-sys-font-default-title-s-900)` }}>{text}</h5>,
		name: "H5/900",
		size: "16/20",
	},
	{
		comp: <h5 style={{ font: `var(--gds-sys-font-default-title-s-700)` }}>{text}</h5>,
		name: "H5/700",
		size: "16/20",
	},
];

export const Headings: Story = {
	render: () => {
		return (
			<div className={styles.container}>
				{titleLines.map(({ comp, name, size }, idx) => (
					<div className={styles.row} key={idx}>
						<div className={styles.desc}>
							<b>{name}</b>
							<span>{size}</span>
						</div>
						{comp}
					</div>
				))}
			</div>
		);
	},
};

// ------------------------------Body--------------------------------
const bodyLines = [
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-xl-700)` }}>{text}</p>,
		name: "XLarge",
		size: "18/22",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-xl-400)` }}>{text}</p>,
		name: "XLarge",
		size: "18/22",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-l-700)` }}>{text}</p>,
		name: "Large",
		size: "16/20",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-l-400)` }}>{text}</p>,
		name: "Large",
		size: "16/20",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-m-700)` }}>{text}</p>,
		name: "Medium",
		size: "14/18",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-m-400)` }}>{text}</p>,
		name: "Medium",
		size: "14/18",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-s-700)` }}>{text}</p>,
		name: "Small",
		size: "12/16",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-s-400)` }}>{text}</p>,
		name: "Small",
		size: "12/16",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-xs-700)` }}>{text}</p>,
		name: "XSmall",
		size: "10/14",
	},
	{
		comp: <p style={{ font: `var(--gds-sys-font-default-body-xs-400)` }}>{text}</p>,
		name: "XSmall",
		size: "10/14",
	},
];

export const Body: Story = {
	render: () => {
		return (
			<div className={styles.container}>
				{bodyLines.map(({ comp, name, size }, idx) => (
					<div className={styles.row} key={idx}>
						<div className={styles.desc}>
							<b>{name}</b>
							<span>{size}</span>
						</div>
						{comp}
					</div>
				))}
			</div>
		);
	},
};

//-----------------------------Label--------------------------------
const labelLines = [
	{
		comp: <label style={{ font: `var(--gds-sys-font-default-label-l-600)` }}>{text}</label>,
		name: "Large",
		size: "16/28",
	},
	{
		comp: <label style={{ font: `var(--gds-sys-font-default-label-m-600)` }}>{text}</label>,
		name: "Medium",
		size: "14/24",
	},
	{
		comp: <label style={{ font: `var(--gds-sys-font-default-label-s-600)` }}>{text}</label>,
		name: "Small",
		size: "12/18",
	},
	{
		comp: <label style={{ font: `var(--gds-sys-font-default-label-xs-600)` }}>{text}</label>,
		name: "XSmall",
		size: "10/16",
	},
];

export const Label: Story = {
	render: () => {
		return (
			<div className={styles.container}>
				{labelLines.map(({ comp, name, size }, idx) => (
					<div className={styles.row} key={idx}>
						<div className={styles.desc}>
							<b>{name}</b>
							<span>{size}</span>
						</div>
						{comp}
					</div>
				))}
			</div>
		);
	},
};
