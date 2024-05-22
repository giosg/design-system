import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgTrophy(
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
        d="M16.444 6V4H7.556v2H4.889a.84.84 0 0 0-.629.293A1.07 1.07 0 0 0 4 7v3c0 1.383.929 4 4.444 4h.02c.646.976 1.588 1.652 2.647 1.9v.32c0 .223-.066.44-.188.615a.9.9 0 0 1-.485.355l-1.536.432a1.78 1.78 0 0 0-.97.71 2.17 2.17 0 0 0-.376 1.23V20h8.888v-.439c0-.446-.132-.88-.376-1.23a1.78 1.78 0 0 0-.97-.71l-1.536-.432a.9.9 0 0 1-.485-.355 1.1 1.1 0 0 1-.188-.615V15.9c1.059-.249 2-.925 2.646-1.9h.02C19.072 14 20 11.383 20 10V7c0-.265-.094-.52-.26-.707A.84.84 0 0 0 19.11 6zm-8.888 5.915C5.913 11.57 5.786 10.279 5.778 10V8h1.778zm7.11-.915c0 .796-.28 1.559-.78 2.121S12.707 14 12 14s-1.386-.316-1.886-.879-.78-1.325-.78-2.121V6h5.333zm3.556-1c0 .071-.023 1.539-1.778 1.914V8h1.778z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgTrophy);
export default ForwardRef;
