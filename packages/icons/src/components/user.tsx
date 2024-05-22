import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgUser(
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
        d="M16.578 20H7.422a2 2 0 0 1-1.847-2.782 7 7 0 0 1 12.85 0A2 2 0 0 1 16.578 20M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;
