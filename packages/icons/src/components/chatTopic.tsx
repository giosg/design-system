import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgChatTopic({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <g fill="currentColor" data-color="main">
        <path d="M13 9.952v2h-2v-2z" />
        <path
          fillRule="evenodd"
          d="M6 3h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4l-3.293 3.292A.999.999 0 0 1 9 21.585V19H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m3 2.952h2v2h2v-2h2v2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2H9v-2H7v-2h2v-2H7v-2h2z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChatTopic);
export default ForwardRef;
