import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCheckboxPartial({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3 10H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCheckboxPartial);
export default ForwardRef;
