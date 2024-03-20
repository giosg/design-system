import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCheckmark({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M8.939 17.061 5 13.121A1.5 1.5 0 0 1 7.121 11L10 13.879 16.879 7A1.5 1.5 0 0 1 19 9.121l-7.939 7.94a1.5 1.5 0 0 1-2.122 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCheckmark);
export default ForwardRef;
