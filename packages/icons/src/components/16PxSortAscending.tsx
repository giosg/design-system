import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function Svg16PxSortAscending(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
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
      <path d="m4 7 4-5 4 5z" />
      <path d="M9.919 10 8 12.4 6.081 10zM12 9H4l4 5z" data-color="main" />
    </svg>
  );
}
const ForwardRef = forwardRef(Svg16PxSortAscending);
export default ForwardRef;
