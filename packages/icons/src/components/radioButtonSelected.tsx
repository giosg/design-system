import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgRadioButtonSelected(
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
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14m0-11a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgRadioButtonSelected);
export default ForwardRef;
