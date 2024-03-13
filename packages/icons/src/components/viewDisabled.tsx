import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgViewDisabled({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <g fill="currentColor" data-color="main">
        <path d="M4.914 20.5 20.5 4.914A1 1 0 1 0 19.086 3.5l-1.954 1.954A9.7 9.7 0 0 0 12 4a9.27 9.27 0 0 0-7.676 3.845L2.5 10.126a3 3 0 0 0 0 3.748l1.824 2.28q.433.614.97 1.139L3.5 19.086A1 1 0 0 0 4.914 20.5M5 12c0-3.309 3.141-6 7-6a7.8 7.8 0 0 1 3.68.906l-1.66 1.66A3.96 3.96 0 0 0 12 8a4 4 0 0 0-4 4c.004.712.2 1.41.566 2.02L6.688 15.9A5.5 5.5 0 0 1 5 12m15-3.754-1.516 1.512A5.2 5.2 0 0 1 19 12c0 3.309-3.141 6-7 6a8 8 0 0 1-1.586-.172L8.8 19.444A9.7 9.7 0 0 0 12 20a9.27 9.27 0 0 0 7.678-3.848l1.822-2.278a3 3 0 0 0 0-3.748z" />
        <path d="m15.973 12.269-3.7 3.7a3.98 3.98 0 0 0 3.7-3.7" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgViewDisabled);
export default ForwardRef;
