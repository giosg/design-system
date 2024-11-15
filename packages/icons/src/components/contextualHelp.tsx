import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgContextualHelp(
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m.84 11.984a1.12 1.12 0 0 1-.834.336 1.1 1.1 0 0 1-.822-.336 1.2 1.2 0 0 1 0-1.656 1.1 1.1 0 0 1 .822-.336 1.12 1.12 0 0 1 .834.336 1.2 1.2 0 0 1 0 1.656m1.825-5.4a2.4 2.4 0 0 1-.451.636c-.175.176-.4.388-.683.636q-.324.256-.607.558c-.13.137-.222.304-.269.486a.64.64 0 0 1-.235.408.7.7 0 0 1-.438.144.6.6 0 0 1-.485-.2.86.86 0 0 1-.174-.576 1.87 1.87 0 0 1 .216-.942q.251-.425.6-.774.228-.24.414-.516a.87.87 0 0 0 .138-.48.52.52 0 0 0-.191-.42.82.82 0 0 0-.529-.156 1.5 1.5 0 0 0-.546.1 4.4 4.4 0 0 0-.606.294l-.287.144a1.5 1.5 0 0 1-.66.228.64.64 0 0 1-.511-.258.97.97 0 0 1-.21-.63.9.9 0 0 1 .091-.42c.073-.128.174-.239.294-.324a4.5 4.5 0 0 1 2.614-.842c.478-.008.952.084 1.392.27.38.158.712.415.96.744.23.31.352.688.348 1.074a1.8 1.8 0 0 1-.185.816"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgContextualHelp);
export default ForwardRef;
