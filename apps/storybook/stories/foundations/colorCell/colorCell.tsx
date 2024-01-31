import * as Tooltip from "@radix-ui/react-tooltip";
import styles from "./colorCell.module.css";

interface ColorCellProps {
	variablePrefix: string;
	value?: number | string;
	label?: string | number;
}

export function ColorCell(props: ColorCellProps): JSX.Element {
	const { label = "", value = "", variablePrefix } = props;

	const onClick = () => {
		navigator.clipboard.writeText(`var(${variablePrefix}${value})`).catch(() => null);
	};

	return (
		<Tooltip.Provider>
			<Tooltip.Root delayDuration={0}>
				<Tooltip.Trigger asChild>
					<div className={styles.colorCell} style={{ backgroundColor: `var(${variablePrefix}${value})` }}>
						<div>{label || value}</div>
					</div>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className={styles.tooltip} onClick={onClick} sideOffset={5}>
						<p>{`var(${variablePrefix}${value})`}</p>
						<span>Click on me to copy!</span>
						<Tooltip.Arrow className="TooltipArrow" />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
}
