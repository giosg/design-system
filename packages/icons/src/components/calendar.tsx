import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCalendar(
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
      <g fill="currentColor" data-color="main">
        <path d="M7.942 13h8a.8.8 0 0 0 .565-.234c.15-.15.235-.554.235-.766s-.085-.616-.235-.766a.8.8 0 0 0-.565-.234h-8a.8.8 0 0 0-.566.234c-.15.15-.234.554-.234.766s.084.616.234.766a.8.8 0 0 0 .566.234" />
        <path d="M19.2 5H18V3.8a.8.8 0 0 0-.234-.566C17.616 3.084 17.212 3 17 3s-.616.084-.766.234A.8.8 0 0 0 16 3.8V5H8V3.8a.8.8 0 0 0-.234-.566C7.616 3.084 7.212 3 7 3s-.616.084-.766.234A.8.8 0 0 0 6 3.8V5H4.8a.8.8 0 0 0-.8.8v13.4a.8.8 0 0 0 .8.8h14.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8M18 18H6V9h12z" />
        <path d="M7.942 16h8a.8.8 0 0 0 .565-.234c.15-.15.235-.554.235-.766s-.085-.616-.235-.766a.8.8 0 0 0-.565-.234h-8a.8.8 0 0 0-.566.234c-.15.15-.234.554-.234.766s.084.616.234.766a.8.8 0 0 0 .566.234" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
