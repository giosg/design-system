import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgDeviceLaptop({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M3 6v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m16 9H5V7h14zM2 18h20v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDeviceLaptop);
export default ForwardRef;
