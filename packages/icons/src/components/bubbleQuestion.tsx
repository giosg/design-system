import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBubbleQuestion(
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
        d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3v2.586a1 1 0 0 0 1.707.707L14 19h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4m-5.069 11.835a1.12 1.12 0 0 1-.834.336 1.1 1.1 0 0 1-.823-.336 1.2 1.2 0 0 1 0-1.655 1.1 1.1 0 0 1 .823-.336 1.12 1.12 0 0 1 .834.336 1.2 1.2 0 0 1 0 1.655m1.824-5.4a2.4 2.4 0 0 1-.45.636c-.176.176-.4.388-.684.636q-.325.256-.606.558a1.1 1.1 0 0 0-.27.485.64.64 0 0 1-.234.409.7.7 0 0 1-.439.144.6.6 0 0 1-.485-.2.87.87 0 0 1-.174-.577 1.86 1.86 0 0 1 .216-.941q.251-.424.6-.774.228-.24.414-.516a.9.9 0 0 0 .137-.48.51.51 0 0 0-.191-.42.82.82 0 0 0-.528-.156q-.282 0-.546.1-.315.125-.607.295l-.287.143a1.45 1.45 0 0 1-.66.223.64.64 0 0 1-.511-.257.97.97 0 0 1-.21-.63.9.9 0 0 1 .091-.42c.073-.128.174-.239.294-.324.374-.271.789-.48 1.229-.619a4.5 4.5 0 0 1 1.386-.221c.478-.008.953.084 1.393.27.38.158.712.414.96.743.23.312.352.69.347 1.078a1.8 1.8 0 0 1-.185.816z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBubbleQuestion);
export default ForwardRef;
