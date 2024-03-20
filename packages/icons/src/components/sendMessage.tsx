import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSendMessage({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M7 5.723V10.4l7 1.6-7 1.6v4.677a1 1 0 0 0 1.5.868l10.985-6.277a1 1 0 0 0 0-1.736L8.5 4.855a1 1 0 0 0-1.5.868"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSendMessage);
export default ForwardRef;
