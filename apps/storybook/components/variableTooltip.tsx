import * as Tooltip from "@radix-ui/react-tooltip";
import { useEffect, useRef, useState } from "react";
import { Toast } from "./toast";
import styles from "./variableTooltip.module.css";

interface VariableTooltipProps {
  variableName: string;
  children: React.ReactNode;
}

export function VariableTooltip(props: VariableTooltipProps): JSX.Element {
  const { variableName, children } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const onTooltipClick = () => {
    navigator.clipboard.writeText(`var(${variableName})`).catch(() => null);
    setTooltipOpen(true);
    clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setTooltipOpen(false);
    }, 1000);
  };

  return (
    <Tooltip.Provider>
      <Toast description="Value copied to the clipboard" open={tooltipOpen} setOpen={setTooltipOpen} />
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild onClick={onTooltipClick}>
          <div>{children}</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.tooltip} sideOffset={5}>
            <p>{`var(${variableName})`}</p>
            <span>Click on me to copy!</span>
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
