import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgLayers({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m19.143 12 1.687-1.181a1 1 0 0 0 0-1.638L12.574 3.4a1 1 0 0 0-1.147 0L3.17 9.181a1 1 0 0 0 0 1.638L4.857 12 3.17 13.181a1 1 0 0 0 0 1.638l8.257 5.78a1 1 0 0 0 1.147 0l8.256-5.78a1 1 0 0 0 0-1.638zM12 18.559 5.488 14l1.112-.779 4.827 3.379a1 1 0 0 0 1.147 0l4.826-3.379 1.113.779zm0-4L5.488 10 12 5.441 18.513 10z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLayers);
export default ForwardRef;
