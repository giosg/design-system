import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSort({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M11.219 5.976 8.5 9.375A1 1 0 0 0 9.281 11h5.438a1 1 0 0 0 .781-1.625l-2.719-3.4a1 1 0 0 0-1.562.001m1.562 12.048 2.719-3.4A1 1 0 0 0 14.719 13H9.281a1 1 0 0 0-.781 1.625l2.719 3.4a1 1 0 0 0 1.562-.001"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSort);
export default ForwardRef;
