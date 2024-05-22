import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgChevronUp(
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
        d="M12.633 9.267a.887.887 0 0 0-1.266 0l-.71.722-3.395 3.456a.92.92 0 0 0-.194.993.9.9 0 0 0 .33.408c.147.1.32.154.497.154h.154a.9.9 0 0 0 .633-.267L12 11.356l3.318 3.377c.168.17.396.267.633.267h.154c.177 0 .35-.053.497-.154a.9.9 0 0 0 .33-.408.93.93 0 0 0-.194-.993l-3.395-3.456z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgChevronUp);
export default ForwardRef;
