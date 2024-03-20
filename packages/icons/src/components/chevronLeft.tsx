import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgChevronLeft({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M7.707 11.293a1 1 0 0 0 0 1.414l.793.793 3.793 3.793A1 1 0 0 0 14 16.586v-.172a1 1 0 0 0-.293-.707L10 12l3.707-3.707A1 1 0 0 0 14 7.586v-.172a1 1 0 0 0-1.707-.707L8.5 10.5z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;
