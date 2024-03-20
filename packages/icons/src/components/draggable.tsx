import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgDraggable({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M9 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-12a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDraggable);
export default ForwardRef;
