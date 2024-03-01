import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgFlowStep({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M19 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-1c.341.003.68.065 1 .184V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.184a2.8 2.8 0 0 1-2 0V18H6V6h12v3.184A3 3 0 0 1 19 9"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFlowStep);
export default ForwardRef;
