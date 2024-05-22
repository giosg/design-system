import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgAttachment(
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
        d="M17 6v10.5a5.5 5.5 0 0 1-11 0V8h2v8.5a3.5 3.5 0 1 0 7 0V6a2 2 0 1 0-4 0v10.5a.5.5 0 0 0 1 0V8h2v8.5a2.5 2.5 0 0 1-5 0V6a4 4 0 1 1 8 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
