import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgClose(
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
        d="M7.28 7.28a.954.954 0 0 0 0 1.348L10.65 12l-3.37 3.372a.954.954 0 0 0 1.35 1.349L12 13.349l3.372 3.372a.954.954 0 0 0 1.349-1.35L13.349 12l3.372-3.372a.954.954 0 0 0-1.35-1.349L12 10.651 8.628 7.28a.954.954 0 0 0-1.349 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgClose);
export default ForwardRef;
