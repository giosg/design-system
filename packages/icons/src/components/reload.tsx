import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgReload({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M15.414 10H19a1 1 0 0 0 1-1V5.414a1 1 0 0 0-1.707-.707l-1.166 1.166A8 8 0 1 0 19.738 14h-2.087A6 6 0 1 1 12 6a5.9 5.9 0 0 1 3.693 1.307l-.986.986A1 1 0 0 0 15.414 10"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgReload);
export default ForwardRef;
