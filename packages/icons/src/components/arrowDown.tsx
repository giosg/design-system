import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgArrowDown({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m7.589 15.651 3.826 4.463a1 1 0 0 0 1.518 0l3.826-4.463A1 1 0 0 0 16 14h-2.824V5a1 1 0 0 0-2 0v9H8.348a1 1 0 0 0-.759 1.651"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
