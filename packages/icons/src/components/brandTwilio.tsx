import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandTwilio(
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
      <g fill="currentColor" data-color="main">
        <path d="M14.227 11.63a1.873 1.873 0 0 0 1.871-1.873 1.873 1.873 0 0 0-1.871-1.874 1.87 1.87 0 0 0-1.871 1.874c0 1.034.838 1.873 1.87 1.873m1.872 2.613a1.873 1.873 0 0 1-1.871 1.874 1.873 1.873 0 0 1-1.871-1.874c0-1.035.838-1.874 1.87-1.874 1.034 0 1.872.84 1.872 1.874m-6.351 1.874a1.873 1.873 0 0 0 1.87-1.874 1.873 1.873 0 0 0-1.87-1.874 1.873 1.873 0 0 0-1.871 1.874c0 1.035.837 1.874 1.87 1.874m1.872-6.36a1.873 1.873 0 0 1-1.871 1.873 1.87 1.87 0 0 1-1.871-1.873 1.872 1.872 0 1 1 3.742 0" />
        <path
          fillRule="evenodd"
          d="M11.987 3C7.032 3 3 7.038 3 12s4.032 9 8.987 9c4.98.026 9.013-4.012 9.013-9s-4.032-9-9.013-9m0 15.65c-3.637 0-6.615-2.981-6.615-6.65 0-3.642 2.978-6.625 6.615-6.625 3.663 0 6.641 2.983 6.641 6.625 0 3.669-2.978 6.65-6.641 6.65"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandTwilio);
export default ForwardRef;
