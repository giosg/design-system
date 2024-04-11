import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgBubbleChat({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3v2.586a1 1 0 0 0 1.707.707L14 19h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4m-3 11H6v-2h9zm3-4H6V8h12z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBubbleChat);
export default ForwardRef;
