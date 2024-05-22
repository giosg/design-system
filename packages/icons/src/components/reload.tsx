import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgReload(
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
        d="M14.99 10.245h3.135A.874.874 0 0 0 19 9.37V6.232a.875.875 0 0 0-1.493-.619l-1.02 1.02a6.993 6.993 0 0 0-11.1 3.073 7.004 7.004 0 0 0 2.571 8.01 6.993 6.993 0 0 0 10.813-3.971h-1.825a5.25 5.25 0 0 1-4.227 3.45 5.24 5.24 0 0 1-5.005-2.171 5.252 5.252 0 0 1 4.29-8.28 5.16 5.16 0 0 1 3.23 1.144l-.863.863a.875.875 0 0 0 .619 1.494"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgReload);
export default ForwardRef;
