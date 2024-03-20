import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgTrophy({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M17 7V5H7v2H4a1 1 0 0 0-1 1v3c0 1.383 1.045 4 5 4h.022A4.98 4.98 0 0 0 11 16.9v.32a1 1 0 0 1-.757.97l-1.728.432A2 2 0 0 0 7 20.562V21h10v-.439a2 2 0 0 0-1.515-1.94l-1.728-.432a1 1 0 0 1-.757-.97V16.9a4.98 4.98 0 0 0 2.977-1.9H16c3.955 0 5-2.617 5-4V8a1 1 0 0 0-1-1zM7 12.915C5.152 12.57 5.009 11.279 5 11V9h2zM15 12a3 3 0 0 1-6 0V7h6zm4-1c0 .071-.026 1.539-2 1.914V9h2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgTrophy);
export default ForwardRef;
