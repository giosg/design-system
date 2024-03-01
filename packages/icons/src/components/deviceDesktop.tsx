import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgDeviceDesktop({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M2 5v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1m18 11H4V6h16zm-4.7 3.445.666 1A1 1 0 0 1 15.131 22H8.868a1 1 0 0 1-.832-1.555l.667-1A1 1 0 0 1 9.535 19h4.93a1 1 0 0 1 .835.445"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDeviceDesktop);
export default ForwardRef;
