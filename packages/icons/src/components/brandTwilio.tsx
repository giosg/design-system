import type { Ref } from "react";
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
        <path d="M13.98 11.672c.918 0 1.663-.746 1.663-1.666a1.664 1.664 0 1 0-3.327 0c0 .92.745 1.665 1.663 1.665m1.664 2.323a1.664 1.664 0 1 1-3.327 0 1.664 1.664 0 1 1 3.327 0M9.997 15.66c.919 0 1.663-.746 1.663-1.666a1.664 1.664 0 1 0-3.326 0c0 .92.744 1.666 1.663 1.666m1.663-5.654a1.664 1.664 0 1 1-3.326 0 1.664 1.664 0 1 1 3.326 0" />
        <path
          fillRule="evenodd"
          d="M11.988 4C7.584 4 4 7.59 4 12s3.584 8 7.988 8c4.428.023 8.012-3.566 8.012-8s-3.584-8-8.012-8m0 13.912c-3.233 0-5.88-2.651-5.88-5.912 0-3.238 2.647-5.889 5.88-5.889 3.257 0 5.904 2.651 5.904 5.889 0 3.26-2.647 5.912-5.904 5.912"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandTwilio);
export default ForwardRef;
