import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSave(
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
        d="M14.7 14.7a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0M21 6.6v13.5a.9.9 0 0 1-.9.9H3.9a.9.9 0 0 1-.9-.9V3.9a.9.9 0 0 1 .9-.9H17zM9 5v3h6V5zm10 2.5-2-1.8v3.4c0 .239.305.468.136.636A.9.9 0 0 1 16.5 10H8c-.239 0-.568-.095-.736-.264A.9.9 0 0 1 7 9.1V5H5v14h14z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;
