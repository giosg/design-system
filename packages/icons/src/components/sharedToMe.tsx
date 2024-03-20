import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSharedToMe({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7 5 5 7l2 2-2 2h6V5L9 7zm0 10-2 2 2 2 2-2 2 2v-6H5z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSharedToMe);
export default ForwardRef;
