import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgWebhook({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M7.743 16.038c.166.293.255.625.257.962a2 2 0 1 1-2-2h.032l2.6-4.331a5 5 0 1 1 7.436-.78l-1.212-2.016-.013.008A3 3 0 0 0 14.99 7a3 3 0 1 0-3.582 2.941l-3.665 6.1zM18 12a5 5 0 0 0-1.653.3l-2.6-4.34a1.98 1.98 0 0 0-.084-2.071A2 2 0 1 0 12 9h.032l3.668 6.1a3 3 0 1 1 .084 3.9h-2.362A5 5 0 1 0 18 12m0 3a2 2 0 0 0-1.723 1H9v1a3 3 0 0 1-.184 1A2.995 2.995 0 1 1 6 14v-2a5 5 0 1 0 4.9 6h5.378A2 2 0 1 0 18 15"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWebhook);
export default ForwardRef;
