import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSmile({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14m-3-9V9a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0m4 0V9a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0m3 2a4 4 0 1 1-8 0z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSmile);
export default ForwardRef;
