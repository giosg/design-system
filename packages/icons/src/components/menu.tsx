import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgMenu({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M20 17a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1m-1-6H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M5 8h14a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;
