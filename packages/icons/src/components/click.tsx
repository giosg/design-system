import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgClick(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      style={{
        ...generateIconCssVars({
          color,
          colorAcc,
          colorAlt,
        }),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      <g fill="currentColor" data-color="main">
        <path d="M12 13a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1" />
        <path d="M17.007 6.007H13V5a3 3 0 0 0-6 0v4.19l-1.418-.833a3 3 0 0 0-3.153 4.676L7 19.318V20a2 2 0 0 0 2 2h7.383a2 2 0 0 0 1.788-1.1l2.617-5.228c.14-.28.213-.588.212-.9V10a3.993 3.993 0 0 0-3.993-3.993M19 14.3a2 2 0 0 1-.211.894l-2.407 4.814L9 20v-.674c0-.423-.134-.835-.382-1.177l-4.572-6.293a1 1 0 0 1 .918-1.584L7 11.553V13a1 1 0 1 0 2 0V4.993a1 1 0 0 1 2 0v5.014a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2A2 2 0 0 1 19 10z" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgClick);
export default ForwardRef;
