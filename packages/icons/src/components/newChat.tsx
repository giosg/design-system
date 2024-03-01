import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgNewChat({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3v2.586a1 1 0 0 0 1.387.92 1 1 0 0 0 .32-.22L14 19h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4m2 12a2 2 0 0 1-2 2h-4.828l-.586.586L11 19.172V17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-7-5h3v2h-3v3h-2v-3H8v-2h3V7h2z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgNewChat);
export default ForwardRef;
