import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandGiosg(
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
        d="M11.998 3A9 9 0 1 0 21 11.999 9.01 9.01 0 0 0 11.998 3m-.277 10.795a3.44 3.44 0 0 1-3.976.289 2.45 2.45 0 0 1-.846-1.321A5.251 5.251 0 1 1 17.032 10c.153.565.15.84.024.953-.479.433-1.555-.429-2.73-.092-1.311.375-1.135 1.71-2.605 2.933"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandGiosg);
export default ForwardRef;
