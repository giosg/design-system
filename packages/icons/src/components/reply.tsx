import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgReply(
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
      <path
        fill="currentColor"
        d="M19 19v-4a2.99 2.99 0 0 0-3-3H6.825l3.6 3.6L9 17l-6-6 6-6 1.425 1.4-3.6 3.6H16a4.99 4.99 0 0 1 5 5v4Z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgReply);
export default ForwardRef;
