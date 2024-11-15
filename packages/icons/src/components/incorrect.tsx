import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgIncorrect(
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
        fillRule="evenodd"
        d="m16 14-2-2 2-2a1.41 1.41 0 0 0 0-2 1.41 1.41 0 0 0-2 0l-2 2-2-2a1.41 1.41 0 0 0-2 0 1.41 1.41 0 0 0 0 2l2 2-2 2a1.41 1.41 0 0 0 0 2 1.41 1.41 0 0 0 2 0l2-2 2 2a1.41 1.41 0 0 0 2 0 1.41 1.41 0 0 0 0-2M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgIncorrect);
export default ForwardRef;
