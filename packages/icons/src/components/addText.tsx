import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgAddText(
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
        d="M18 16h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm1-12H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8v-2H6V6h12v7h2V5a1 1 0 0 0-1-1m-3 5H8v2h8zm-8 6h5v-2H8z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAddText);
export default ForwardRef;
