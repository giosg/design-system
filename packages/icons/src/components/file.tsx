import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgFile(
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
        d="m19.121 6.121-2.242-2.242A3 3 0 0 0 14.757 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.243a3 3 0 0 0-.879-2.122M6 19V5h6v4a2 2 0 0 0 2 2h4v8zM18 9h-4V5h1l3 3z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
