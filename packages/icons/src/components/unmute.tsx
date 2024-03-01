import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgUnmute({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M11 5.079a1 1 0 0 1 1.005 1v11.84a1 1 0 0 1-1.625.779l-2.832-2.26A2 2 0 0 0 6.3 16H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.3a2 2 0 0 0 1.249-.438L10.375 5.3A.98.98 0 0 1 11 5.079m3.419 5.507a2 2 0 0 1 0 2.828c-.04.04-.086.069-.128.105l1.286 1.521a3.95 3.95 0 0 0 0-6.08l-1.286 1.521c.037.036.083.065.123.105zM19 12a5.49 5.49 0 0 1-2.251 4.431l1.293 1.527a7.48 7.48 0 0 0 0-11.916l-1.293 1.527A5.49 5.49 0 0 1 19 12"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUnmute);
export default ForwardRef;
