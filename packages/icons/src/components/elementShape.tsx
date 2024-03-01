import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgElementShape({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zm-1-3a2 2 0 0 1-2 2H8a2 2 0 1 1 0-4h8a2 2 0 0 1 2 2m-1-7H7V7h10zm-5 3H7v-2h5z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgElementShape);
export default ForwardRef;
