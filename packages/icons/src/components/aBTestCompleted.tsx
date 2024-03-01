import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgABTestCompleted({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M11.992 3a9 9 0 1 0 8.994 9 8.99 8.99 0 0 0-8.994-9m0 16A7 7 0 1 1 12 19zm2.832-9.829 1.414 1.414L11 15.829l-1.415-1.414-2.328-2.329 1.415-1.414L11 13z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgABTestCompleted);
export default ForwardRef;
