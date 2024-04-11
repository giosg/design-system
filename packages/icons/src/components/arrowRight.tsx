import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgArrowRight({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m15.651 16.585 4.463-3.826a1 1 0 0 0 0-1.518l-4.463-3.826A1 1 0 0 0 14 8.174V11H5a1 1 0 0 0 0 2h9v2.826a1 1 0 0 0 1.651.759"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;