import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgChevronUp({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M12.707 8.707a1 1 0 0 0-1.414 0L10.5 9.5l-3.793 3.793A1 1 0 0 0 7.414 15h.172a1 1 0 0 0 .707-.293L12 11l3.707 3.707a1 1 0 0 0 .707.293h.172a1 1 0 0 0 .707-1.707L13.5 9.5z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronUp);
export default ForwardRef;
