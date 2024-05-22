import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgMenu(
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
        d="M19 17c0 .265-.092.52-.256.707a.82.82 0 0 1-.619.293H5.875a.82.82 0 0 1-.619-.293A1.08 1.08 0 0 1 5 17c0-.265.092-.52.256-.707A.82.82 0 0 1 5.875 16h12.25c.232 0 .455.105.619.293.164.187.256.442.256.707m-.875-6H5.875a.82.82 0 0 0-.619.293A1.08 1.08 0 0 0 5 12c0 .265.092.52.256.707a.82.82 0 0 0 .619.293h12.25a.82.82 0 0 0 .619-.293c.164-.187.256-.442.256-.707s-.092-.52-.256-.707a.82.82 0 0 0-.619-.293M5.875 8h12.25a.82.82 0 0 0 .619-.293C18.908 7.52 19 7.265 19 7s-.092-.52-.256-.707A.82.82 0 0 0 18.125 6H5.875a.82.82 0 0 0-.619.293A1.08 1.08 0 0 0 5 7c0 .265.092.52.256.707A.82.82 0 0 0 5.875 8"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;
