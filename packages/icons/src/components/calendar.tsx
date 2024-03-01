import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCalendar({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="M7 14h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m0 4h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2" />
      <path
        fill="currentColor"
        d="M21 4h-2V3a1 1 0 0 0-2 0v1H7V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16H4V10h16z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
