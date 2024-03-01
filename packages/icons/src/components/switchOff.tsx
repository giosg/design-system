import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSwitchOff({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={24} fill="none" viewBox="0 0 36 24" ref={ref} {...props}>
      <rect width={32} height={20} x={2} y={2} fill="currentColor" rx={10} />
      <circle cx={12} cy={12} r={7} fill="white" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSwitchOff);
export default ForwardRef;
