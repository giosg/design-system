import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgAbTesting(
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
        d="M4 2a2 2 0 0 0-2 2v8h2V8h2v4h2V4a2 2 0 0 0-2-2zm0 2h2v2H4m18 9.5V14a2 2 0 0 0-2-2h-4v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5 1.54 1.54 0 0 0 1.5-1.5M20 20h-2v-2h2zm0-4h-2v-2h2M5.79 21.61l-1.58-1.22 14-18 1.58 1.22z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAbTesting);
export default ForwardRef;
