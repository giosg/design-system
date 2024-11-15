import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCallSettings(
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
        d="M5.293 5.707a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L9 10l-2 2 5 5 2-2 .293-.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L18 19a5.657 5.657 0 0 1-8 0l-5-5a5.657 5.657 0 0 1 0-8zm13.18 3.277 1.3.807-1.054 1.7-.987-.612a1 1 0 0 0-1.081.018l-.208.139a1 1 0 0 0-.446.833V13H14v-1.131a1 1 0 0 0-.446-.833l-.208-.139a1 1 0 0 0-1.081-.018l-.987.612-1.054-1.7 1.3-.807a1 1 0 0 0 .476-.85v-.268a1 1 0 0 0-.473-.85l-1.3-.807 1.054-1.7.987.612a1 1 0 0 0 1.078-.021l.208-.139a1 1 0 0 0 .446-.83V3h2v1.131a1 1 0 0 0 .446.833l.208.139a1 1 0 0 0 1.081.018l.987-.612 1.054 1.7-1.3.807a1 1 0 0 0-.473.85v.268a1 1 0 0 0 .47.85M16 8a1 1 0 1 0-2.001 0A1 1 0 0 0 16 8"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCallSettings);
export default ForwardRef;
