import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgMove({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M19 8H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-1 10h-8v-8h8zM13 6V4h2a1 1 0 0 1 1 1v1zM8 6V4h3v2zm-2 7v3H5a1 1 0 0 1-1-1v-2zm0-2H4V8h2zm0-7v2H4V5a1 1 0 0 1 1-1z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMove);
export default ForwardRef;
