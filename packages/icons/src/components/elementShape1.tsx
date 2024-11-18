import type { Ref } from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgElementShape1({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M8.08 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3.08a6.3 6.3 0 0 0-2 0V6H6v8h2.08a6.3 6.3 0 0 0 0 2M21 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-2 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgElementShape1);
export default ForwardRef;
