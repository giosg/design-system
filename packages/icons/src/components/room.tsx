import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgRoom(
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
        d="m21 8-9-6-9 6v8l9 6 9-6zm-9 4.4 5.394 3.6L12 19.6 6.606 16zm1-1.737V5.07l6 4v5.6z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgRoom);
export default ForwardRef;
