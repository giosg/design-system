import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgLoyalty(
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
        d="m16 13-4.15-4.05a7.8 7.8 0 0 1-1.312-1.663A3.84 3.84 0 0 1 10 5.3a3.18 3.18 0 0 1 .963-2.338A3.18 3.18 0 0 1 13.3 2a3.4 3.4 0 0 1 1.5.337 3.7 3.7 0 0 1 1.2.913 3.7 3.7 0 0 1 1.2-.913A3.4 3.4 0 0 1 18.7 2a3.2 3.2 0 0 1 2.338.962A3.2 3.2 0 0 1 22 5.3a3.9 3.9 0 0 1-.525 1.987 7.5 7.5 0 0 1-1.3 1.663Zm0-2.8 2.725-2.675a9 9 0 0 0 .875-1.013A1.98 1.98 0 0 0 20 5.3 1.28 1.28 0 0 0 18.7 4a1.6 1.6 0 0 0-.662.137 1.44 1.44 0 0 0-.538.413L16 6.35l-1.5-1.8a1.44 1.44 0 0 0-.537-.413A1.6 1.6 0 0 0 13.3 4 1.28 1.28 0 0 0 12 5.3a1.98 1.98 0 0 0 .4 1.212 9 9 0 0 0 .875 1.013Zm-9 8.3 6.95 1.9 5.95-1.85a1.15 1.15 0 0 0-.362-.388A.94.94 0 0 0 19 18h-5.05a9 9 0 0 1-1.075-.05 4 4 0 0 1-.825-.2l-2.325-.775.55-1.95 2.025.675a7 7 0 0 0 1 .2q.574.075 1.7.1a.95.95 0 0 0-.162-.525.76.76 0 0 0-.388-.325L8.6 13H7ZM1 22V11h7.6a1.7 1.7 0 0 1 .35.037 3 3 0 0 1 .325.088L15.15 13.3a2.7 2.7 0 0 1 1.338 1.05A2.87 2.87 0 0 1 17 16h2a2.98 2.98 0 0 1 2.125.825A2.85 2.85 0 0 1 22 19v1l-8 2.5-7-1.95V22Zm2-2h2v-7H3Z"
        className="cls-1"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLoyalty);
export default ForwardRef;
