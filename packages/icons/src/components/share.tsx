import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgShare({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M15 15a2.97 2.97 0 0 0-1.934.724L8.881 12.8c.16-.518.16-1.073 0-1.591l4.185-2.93A2.989 2.989 0 1 0 12 6q.003.273.055.541L7.738 9.563a3 3 0 1 0 0 4.876l4.312 3.017q-.05.27-.05.544a3 3 0 1 0 3-3"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
