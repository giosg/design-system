import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPointerDown({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m7.2 10.6 4 5.333a1 1 0 0 0 1.6 0l4-5.333A1 1 0 0 0 16 9H8a1 1 0 0 0-.8 1.6"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPointerDown);
export default ForwardRef;
