import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgWorkflowRunning({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M21 12a9 9 0 1 1-9-9V1l5 3-5 3V5a7 7 0 1 0 4.95 2.05l1.414-1.414A8.97 8.97 0 0 1 21 12m-10 0a1 1 0 1 0 2.002 0A1 1 0 0 0 11 12m-3 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 0a1 1 0 1 0 2.002 0A1 1 0 0 0 14 12"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflowRunning);
export default ForwardRef;
