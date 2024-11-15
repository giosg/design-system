import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgInformation(
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
        <path d="M12 20a7.8 7.8 0 0 1-3.12-.63 8.1 8.1 0 0 1-2.54-1.71 8.1 8.1 0 0 1-1.71-2.54A7.8 7.8 0 0 1 4 12q0-1.66.63-3.12t1.71-2.54a8.1 8.1 0 0 1 2.54-1.71A7.8 7.8 0 0 1 12 4q1.66 0 3.12.63t2.54 1.71 1.71 2.54T20 12t-.63 3.12-1.71 2.54a8.1 8.1 0 0 1-2.54 1.71Q13.66 20 12 20m0-1.6q2.68 0 4.54-1.86T18.4 12t-1.86-4.54T12 5.6 7.46 7.46 5.6 12t1.86 4.54T12 18.4" />
        <path d="M11.306 17a.27.27 0 0 1-.212-.095.36.36 0 0 1-.082-.245v-6.395q0-.15.082-.245a.27.27 0 0 1 .212-.095h1.388q.118 0 .2.095a.33.33 0 0 1 .094.245v6.395q0 .15-.094.245a.26.26 0 0 1-.2.095zm-.012-8.095a.27.27 0 0 1-.212-.095.36.36 0 0 1-.082-.245V7.354q0-.15.082-.245A.25.25 0 0 1 11.294 7h1.4q.13 0 .212.109a.33.33 0 0 1 .094.245v1.21q0 .15-.094.246a.27.27 0 0 1-.212.095z" />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgInformation);
export default ForwardRef;
