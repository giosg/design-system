import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgNumberedList(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      data-name="Layer 1"
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
        d="M4 9v1h2v1H4v3h3v-1H5v-1h2V9Zm0 6v1h2v1H4v1h2v1H4v1h3v-5Zm17-8H9V5h12Zm0 6H9v-2h12Zm0 6H9v-2h12ZM7 7v1H4V7h1V5H4V4h2v3Z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgNumberedList);
export default ForwardRef;
