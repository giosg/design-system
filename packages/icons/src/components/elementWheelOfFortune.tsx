import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgElementWheelOfFortune(
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
        d="m18.914 14.46-3.628-2.271a.71.71 0 0 1 0-1.203l3.628-2.27A.71.71 0 0 1 20 9.321v4.54a.71.71 0 0 1-1.086.598m-1.038 1.336-1.423-.89a5.89 5.89 0 0 1-6.6 2.312 5.888 5.888 0 0 1-3.003-9.12 5.888 5.888 0 0 1 9.603.182l1.428-.892A7.57 7.57 0 0 0 9.52 4.283a7.57 7.57 0 0 0-5.515 7.008 7.57 7.57 0 0 0 2.309 5.723l-1.455 1.304V20h13.459v-1.682l-1.456-1.304q.572-.557 1.014-1.218M9.065 11.59a2.522 2.522 0 0 0 3.015 2.474 2.524 2.524 0 1 0-3.015-2.474"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgElementWheelOfFortune);
export default ForwardRef;
