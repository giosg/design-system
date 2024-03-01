import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPointerLeft({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="m13.4 7.2-5.333 4a1 1 0 0 0 0 1.6l5.333 4A1 1 0 0 0 15 16V8a1 1 0 0 0-1.6-.8" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPointerLeft);
export default ForwardRef;
