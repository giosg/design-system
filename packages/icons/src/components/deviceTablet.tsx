import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgDeviceTablet({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m14 16H6V4h12zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDeviceTablet);
export default ForwardRef;
