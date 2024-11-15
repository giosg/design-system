import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgTag(
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
        d="M15.561 8.439a1.5 1.5 0 1 1-2.12 2.122 1.5 1.5 0 0 1 2.12-2.122M20 6.828v6.344a2 2 0 0 1-.586 1.414l-7 7a2 2 0 0 1-2.828 0l-5.172-5.172A1.95 1.95 0 0 1 3.857 15h-.024v-2h.024a1.95 1.95 0 0 1 .557-1.414l7-7A2 2 0 0 1 12.828 4h4.344a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 1 20 6.828m-2 0L17.172 6h-4.344l-7 7v.005L11 18.172l7-7z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;
