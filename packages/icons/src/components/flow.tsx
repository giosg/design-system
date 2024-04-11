import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgFlow({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M19 5v4a1 1 0 0 1-1 1h-6V8h5V6h-5V4h6a1 1 0 0 1 1 1m-8-1H6a1 1 0 0 0-1 1v5h6zm7 7H9v2h8v2H9v3H7v-7H5v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFlow);
export default ForwardRef;
