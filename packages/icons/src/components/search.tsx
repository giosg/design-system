import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSearch({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M19.293 18.293 15.71 14.71a6.026 6.026 0 1 0-1.591 1.409l3.588 3.588a1 1 0 0 0 .707.293h.172a1 1 0 0 0 .707-1.707M11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
