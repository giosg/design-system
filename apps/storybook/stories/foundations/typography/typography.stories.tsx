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
		variable: "--gds-sys-font-default-title-3-xl-black",
		elm: "h1",
		name: "H1/900",
		size: "30/36",
	},
	{
		variable: "--gds-sys-font-default-title-3-xl-bold",
		elm: "h1",
		name: "H1/700",
		size: "30/36",
	},
	{
		variable: "--gds-sys-font-default-title-2-xl-black",
		elm: "h2",
		name: "H2/900",
		size: "26/32",
	},
	{
		variable: "--gds-sys-font-default-title-2-xl-bold",
		elm: "h2",
		name: "H2/700",
		size: "26/32",
	},
	{
		variable: "--gds-sys-font-default-title-xl-black",
		elm: "h3",
		name: "H3/900",
		size: "22/26",
	},
	{
		variable: "--gds-sys-font-default-title-xl-bold",
		elm: "h3",
		name: "H3/700",
		size: "22/26",
	},
	{
		variable: "--gds-sys-font-default-title-l-black",
		elm: "h4",
		name: "H4/900",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-title-l-bold",
		elm: "h4",
		name: "H4/700",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-title-m-black",
		elm: "h5",
		name: "H5/900",
		size: "16/20",
	},
	{
		variable: "--gds-sys-font-default-title-m-bold",
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
		variable: "--gds-sys-font-default-body-l-bold",
		name: "L-bold",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-body-l-regular",
		name: "L-regular",
		size: "18/22",
	},
	{
		variable: "--gds-sys-font-default-body-m-bold",
		name: "M-bold",
		size: "16/20",
	},
	{
		variable: "--gds-sys-font-default-body-m-regular",
		name: "M-regular",
		size: "16/20",
	},
	{
		variable: "--gds-sys-font-default-body-s-bold",
		name: "S-bold",
		size: "14/18",
	},
	{
		variable: "--gds-sys-font-default-body-s-regular",
		name: "S-regular",
		size: "14/18",
	},
	{
		variable: "--gds-sys-font-default-body-xs-bold",
		name: "XS-bold",
		size: "12/16",
	},
	{
		variable: "--gds-sys-font-default-body-xs-regular",
		name: "XS-regular",
		size: "12/16",
	},
	{
		variable: "--gds-sys-font-default-body-2-xs-bold",
		name: "2XS-bold",
		size: "10/14",
	},
	{
		variable: "--gds-sys-font-default-body-2-xs-regular",
		name: "2XS-regular",
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
		variable: "--gds-sys-font-default-label-m-semibold",
		name: "M-semibold",
		size: "16/24",
	},
	{
		variable: "--gds-sys-font-default-label-s-semibold",
		name: "S-semibold",
		size: "14/18",
	},
	{
		variable: "--gds-sys-font-default-label-xs-semibold",
		name: "XS-semibold",
		size: "12/16",
	},
	{
		variable: "--gds-sys-font-default-label-2-xs-semibold",
		name: "2XS-semibold",
		size: "10/14",
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
