import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgBellEnabled({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M19 16v1H5v-1l1-2v-3a6 6 0 0 1 4-5.651V5h-.016a2 2 0 0 1 3.993 0H14v.349A6 6 0 0 1 18 11v3zm-7 5a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBellEnabled);
export default ForwardRef;
