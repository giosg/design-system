import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCondition(
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
        d="m19.753 11.404-7.157-7.157a.844.844 0 0 0-1.193 0l-7.156 7.157a.843.843 0 0 0 0 1.192l7.156 7.157a.843.843 0 0 0 1.193 0l7.157-7.157a.843.843 0 0 0 0-1.192M12 17.964 6.036 12 12 6.036 17.963 12zm-.72-5.08c0-.788.19-1.032.546-1.266.303-.2.536-.364.536-.632a.405.405 0 0 0-.432-.402.47.47 0 0 0-.478.469h-1.224c.01-1.054.783-1.494 1.714-1.494 1.022 0 1.78.45 1.78 1.35a1.33 1.33 0 0 1-.784 1.196.83.83 0 0 0-.527.776v.115h-1.13zm-.084 1.463a.664.664 0 0 1 .675-.66.664.664 0 1 1 0 1.33.666.666 0 0 1-.678-.67z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCondition);
export default ForwardRef;
