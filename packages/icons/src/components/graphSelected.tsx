import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgGraphSelected({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="M18 10H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4" data-color="main" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgGraphSelected);
export default ForwardRef;
