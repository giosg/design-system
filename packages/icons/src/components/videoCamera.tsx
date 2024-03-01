import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgVideoCamera({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="M20.629 7.548A1 1 0 0 1 22 8.476v7.046a1 1 0 0 1-1.371.928L17 15V9z" />
      <path
        fill="currentColor"
        d="M20.629 7.548A1 1 0 0 1 22 8.476v7.046a1 1 0 0 1-1.371.928L17 15V9zM15 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 12H4V7h10z"
      />
      <path fill="currentColor" d="M9 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgVideoCamera);
export default ForwardRef;
