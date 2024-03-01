import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPlay({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M7 5.723a1 1 0 0 1 1.5-.868l10.985 6.277a1 1 0 0 1 0 1.736L8.5 19.145a1 1 0 0 1-1.5-.868z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
