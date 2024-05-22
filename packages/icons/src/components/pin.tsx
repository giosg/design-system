import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgPin(
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
        d="M19.7 7.982 16.017 4.3a1.026 1.026 0 0 0-1.451 0l-.301.3v1.027l-2.631 2.631a1.03 1.03 0 0 1-1.05.248L8.105 7.68 6.78 9.008a1.027 1.027 0 0 0 0 1.452l2.354 2.354-1.811 1.81A13.76 13.76 0 0 0 4 20a13.8 13.8 0 0 0 5.374-3.322l1.812-1.81 2.354 2.353a1.027 1.027 0 0 0 1.452 0l1.327-1.327-.821-2.479a1.03 1.03 0 0 1 .247-1.05l2.627-2.63H19.4l.3-.302a1.026 1.026 0 0 0 0-1.451m-2.78.3-2.63 2.632a3.06 3.06 0 0 0-.745 3.151l.13.386-4.131-4.126.386.13a3.08 3.08 0 0 0 3.151-.744l2.631-2.631.088-.089 1.209 1.203z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;
