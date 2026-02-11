import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgAiMessage(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      data-name="Layer 1"
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
      <path
        fill="currentColor"
        d="M7 12h8v2H7Zm11-9h-7v2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4.828l-.586.586L11 19.172V17H6a2 2 0 0 1-2-2v-5H2v5a4 4 0 0 0 4 4h3v2.586a1 1 0 0 0 1.007 1 .98.98 0 0 0 .7-.3L14 19h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4m-8 3L7.333 4.667 6 2 4.667 4.667 2 6l2.667 1.333L6 10l1.333-2.667ZM9 8v2h8V8Z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAiMessage);
export default ForwardRef;
