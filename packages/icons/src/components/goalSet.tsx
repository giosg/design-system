import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgGoalSet(
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
        d="M20.566 10.742a8.31 8.31 0 1 1-7.307-7.307v1.86a6.498 6.498 0 1 0 5.447 5.447zm-8.228-1.84V7.06a4.6 4.6 0 1 0 4.601 4.6H15.1a2.76 2.76 0 1 1-2.76-2.76m-.65 3.41a.92.92 0 0 0 1.3 0l2.952-2.95h2.38L22 5.68h-3.68V2l-3.681 3.68v2.38l-2.951 2.951a.92.92 0 0 0 0 1.301"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgGoalSet);
export default ForwardRef;
