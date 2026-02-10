import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBulletList(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      data-name="Layer 1"
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
        d="M21 7H9V5h12Zm0 4H9v2h12Zm0 6H9v2h12ZM3 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2m0 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2m0 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBulletList);
export default ForwardRef;
