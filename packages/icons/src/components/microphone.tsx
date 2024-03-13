import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgMicrophone({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <g fill="currentColor" data-color="main">
        <path d="M20 11h-2a6 6 0 1 1-12 0H4a8 8 0 0 0 7 7.932V21h2v-2.069A8 8 0 0 0 20 11" />
        <path d="M12 15a4 4 0 0 0 4-4V7a4 4 0 1 0-8 0v4a4 4 0 0 0 4 4" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMicrophone);
export default ForwardRef;
