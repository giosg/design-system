import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCut({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M6 8H4V5a1 1 0 0 1 1-1h3v2H6zm7-4h-3v2h3zm-7 6H4v4h2zm13-6h-4v2h3v5h2V5a1 1 0 0 0-1-1M6 16H4v3a1 1 0 0 0 1 1h6v-2H6zm11-4h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCut);
export default ForwardRef;
