import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgMinimizeToLeft({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M6 11H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6v-2h5V6H6zm5 9-2.793-2.793 3.5-3.5-1.414-1.414-3.5 3.5L4 13v7z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMinimizeToLeft);
export default ForwardRef;
