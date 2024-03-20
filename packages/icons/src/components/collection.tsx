import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCollection({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M8.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M13 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m-7 7a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCollection);
export default ForwardRef;
