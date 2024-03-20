import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgOperator({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M20 15.949V16h-.09A6.006 6.006 0 0 1 14 21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1 4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v4a5.98 5.98 0 0 0 2 4.46v2.458A8.06 8.06 0 0 1 4.594 16H4.5A3.492 3.492 0 0 1 4 9.051V9a6.007 6.007 0 0 1 6-6h4a6.006 6.006 0 0 1 6 6v.051a3.483 3.483 0 0 1 0 6.9zm-5.373-1.5A1 1 0 0 0 13.73 13h-3.459a1 1 0 0 0-.9 1.451 3 3 0 0 0 5.254 0zM10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 0-2.001 0A1 1 0 0 0 15 10"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgOperator);
export default ForwardRef;
