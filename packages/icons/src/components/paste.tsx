import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPaste({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M20 5v6h-2V6H6v12h5v2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1m-8 11 4 5 4-5h-3v-4h-2v4z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPaste);
export default ForwardRef;
