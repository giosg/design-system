import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSendBackward({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M19 9h-3V6a1 1 0 0 0-1-1h-5v2h4v7H5v1a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1 9h-7v-2h4a1 1 0 0 0 1-1v-4h2zM2 8h3V4h2v4h3l-4 5z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSendBackward);
export default ForwardRef;
