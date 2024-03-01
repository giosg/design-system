import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgRemove({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <rect width={14} height={2} x={5} y={11} fill="currentColor" rx={1} />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;
