import { VariableTooltip } from "../../../../components/variableTooltip";
import styles from "./colorCell.module.css";

interface ColorCellProps {
  variablePrefix: string;
  value?: number | string;
  label?: string | number;
}

export function ColorCell(props: ColorCellProps): JSX.Element {
  const { label = "", value = "", variablePrefix } = props;

  return (
    <VariableTooltip variableName={variablePrefix + value}>
      <div className={styles.colorCell}>
        <div style={{ backgroundColor: `var(${variablePrefix}${value})` }} />
        <span>{label || value}</span>
      </div>
    </VariableTooltip>
  );
}
