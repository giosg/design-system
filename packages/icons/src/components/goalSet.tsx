import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgGoalSet({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M20.941 11A9.03 9.03 0 1 1 13 3.059V5.08A7.062 7.062 0 1 0 18.92 11zM12 9V7a5 5 0 1 0 5 5h-2a3 3 0 1 1-3-3m-.707 3.707a1 1 0 0 0 1.414 0L15.914 9.5H18.5l4-4h-4v-4l-4 4v2.586l-3.207 3.207a1 1 0 0 0 0 1.414"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgGoalSet);
export default ForwardRef;
