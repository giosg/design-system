import type { Meta, StoryObj } from "@storybook/react";
import { createElement } from "react";
import { VariableTooltip } from "../../../components/variableTooltip";
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
		variable: "--gds-sys-font-default-title-xxl-900",
		elm: "h1",
		name: "H1/900",
		size: "30/36",
	},
	{
		variable: "--gds-sys-font-default-title-xxl-700",
		elm: "h1",
		name: "H1/700",
		size: "30/36",
	},
	{
		variable: "--gds-sys-font-default-title-xl-900",
		elm: "h2",
		name: "H2/900",
		size: "26/32",
	},
	{
		variable: "--gds-sys-font-default-title-xl-700",
		elm: "h2",
		name: "H2/700",
		size: "26/32",
	},
	{
		variable: "--gds-sys-font-default-title-l-900",
		elm: "h3",
		name: "H3/900",
		size: "22/26",
	},
	{
		variable: "--gds-sys-font-default-title-l-700",
		elm: "h3",
		name: "H3/700",
		size: "22/26",
	},
	{
		variable: "--gds-sys-font-default-title-m-900",
		elm: "h4",
		name: "H4/900",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-title-m-700",
		elm: "h4",
		name: "H4/700",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-title-s-900",
		elm: "h5",
		name: "H5/900",
		size: "16/20",
	},
	{
		variable: "--gds-sys-font-default-title-s-700",
		elm: "h5",
		name: "H5/700",
		size: "16/20",
	},
];

export const Headings: Story = {
	render: () => {
		return (
			<div className={styles.container}>
				{titleLines.map(({ variable, name, size, elm }, idx) => (
					<div className={styles.row} key={idx}>
						<div className={styles.desc}>
							<b>{name}</b>
							<span>{size}</span>
						</div>
						<VariableTooltip variableName={variable}>
							{createElement(elm, { style: { font: `var(${variable})` } }, text)}
						</VariableTooltip>
					</div>
				))}
			</div>
		);
	},
};

// ------------------------------Body--------------------------------
const bodyLines = [
	{
		variable: "--gds-sys-font-default-body-xl-700",
		name: "XLarge",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-body-xl-400",
		name: "XLarge",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-body-l-700",
		name: "Large",
		size: "16/20",
	},
	{
		variable: "--gds-sys-font-default-body-l-400",
		name: "Large",
		size: "16/20",
	},
	{
		variable: "--gds-sys-font-default-body-m-700",
		name: "Medium",
		size: "14/18",
	},
	{
		variable: "--gds-sys-font-default-body-m-400",
		name: "Medium",
		size: "14/18",
	},
	{
		variable: "--gds-sys-font-default-body-s-700",
		name: "Small",
		size: "12/16",
	},
	{
		variable: "--gds-sys-font-default-body-s-400",
		name: "Small",
		size: "12/16",
	},
	{
		variable: "--gds-sys-font-default-body-xs-700",
		name: "XSmall",
		size: "10/14",
	},
	{
		variable: "--gds-sys-font-default-body-xs-400",
		name: "XSmall",
		size: "10/14",
	},
];

export const Body: Story = {
	render: () => {
		return (
			<div className={styles.container}>
				{bodyLines.map(({ variable, name, size }, idx) => (
					<div className={styles.row} key={idx}>
						<div className={styles.desc}>
							<b>{name}</b>
							<span>{size}</span>
						</div>
						<VariableTooltip variableName={variable}>
							{createElement("p", { style: { font: `var(${variable})` } }, text)}
						</VariableTooltip>
					</div>
				))}
			</div>
		);
	},
};

//-----------------------------Label--------------------------------
const labelLines = [
	{
		variable: "--gds-sys-font-default-label-l-600",
		name: "Large",
		size: "16/28",
	},
	{
		variable: "--gds-sys-font-default-label-m-600",
		name: "Medium",
		size: "14/24",
	},
	{
		variable: "--gds-sys-font-default-label-s-600",
		name: "Small",
		size: "12/18",
	},
	{
		variable: "--gds-sys-font-default-label-xs-600",
		name: "XSmall",
		size: "10/16",
	},
];

export const Label: Story = {
	render: () => {
		return (
			<div className={styles.container}>
				{labelLines.map(({ variable, name, size }, idx) => (
					<div className={styles.row} key={idx}>
						<div className={styles.desc}>
							<b>{name}</b>
							<span>{size}</span>
						</div>
						<VariableTooltip variableName={variable}>
							{createElement("label", { style: { font: `var(${variable})` } }, text)}
						</VariableTooltip>
					</div>
				))}
			</div>
		);
	},
};
