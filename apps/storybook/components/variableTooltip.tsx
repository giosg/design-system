import * as Tooltip from "@radix-ui/react-tooltip";
import styles from "./variableTooltip.module.css";

interface VariableTooltipProps {
	variableName: string;
	children: React.ReactNode;
}

export function VariableTooltip(props: VariableTooltipProps): JSX.Element {
	const { variableName, children } = props;

	const onClick = () => {
		navigator.clipboard.writeText(`var(${variableName})`).catch(() => null);
	};

	return (
		<Tooltip.Provider>
			<Tooltip.Root delayDuration={0}>
				<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className={styles.tooltip} onClick={onClick} sideOffset={5}>
						<p>{`var(${variableName})`}</p>
						<span>Click on me to copy!</span>
						<Tooltip.Arrow className="TooltipArrow" />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
}
