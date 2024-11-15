import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCallVideo(
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
        d="M21 16.167 17.21 14.5v-5L21 7.833zM14.368 7H3.948c-.252 0-.493.088-.67.244a.8.8 0 0 0-.278.59v8.333c0 .22.1.433.277.589s.42.244.67.244h10.421c.252 0 .493-.088.67-.244a.8.8 0 0 0 .278-.59V7.834c0-.22-.1-.433-.278-.589a1.02 1.02 0 0 0-.67-.244"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCallVideo);
export default ForwardRef;
