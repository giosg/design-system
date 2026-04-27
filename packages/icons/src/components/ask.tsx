import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgAsk(
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
        d="M18 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3v2.586a1 1 0 0 0 1.007 1 .98.98 0 0 0 .7-.3L14 19h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4m2 12a2 2 0 0 1-2 2h-4.828l-.586.586L11 19.172V17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Zm-8.432-2.535q0-.35.013-.687a1.35 1.35 0 0 1 .187-.638 2.6 2.6 0 0 1 .638-.725 3.1 3.1 0 0 0 .662-.7 1.9 1.9 0 0 0 .175-.575.88.88 0 0 0-.325-.7 1.16 1.16 0 0 0-1.5 0 1.43 1.43 0 0 0-.45.7l-1.1-.475a2.442 2.442 0 0 1 3.913-1.05 1.9 1.9 0 0 1 .687 1.5 1.7 1.7 0 0 1-.075.513 1.5 1.5 0 0 1-.225.437 3.5 3.5 0 0 1-.65.713 2.4 2.4 0 0 0-.6.737 2.15 2.15 0 0 0-.15.95Zm0 2.313a.78.78 0 0 1-.25-.588.854.854 0 0 1 .85-.85.78.78 0 0 1 .588.25.84.84 0 0 1 .237.6.81.81 0 0 1-.825.825.84.84 0 0 1-.6-.237"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAsk);
export default ForwardRef;
