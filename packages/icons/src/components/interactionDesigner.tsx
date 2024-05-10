import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgInteractionDesigner(
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
        d="M10 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0m11.806 7.853L16.74 8.077a1.431 1.431 0 0 0-2.479 0l-5.067 8.776A1.43 1.43 0 0 0 10.433 19h10.133a1.43 1.43 0 0 0 1.24-2.147"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgInteractionDesigner);
export default ForwardRef;
