import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPointerUp({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="m16.8 13.4-4-5.333a1 1 0 0 0-1.6 0l-4 5.333A1 1 0 0 0 8 15h8a1 1 0 0 0 .8-1.6" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPointerUp);
export default ForwardRef;
