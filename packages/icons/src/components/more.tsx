import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgMore(
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
        d="M13.6 12.5a1.43 1.43 0 0 0-.27-.833 1.6 1.6 0 0 0-.718-.553 1.7 1.7 0 0 0-.924-.085c-.31.058-.596.2-.82.41s-.376.477-.437.768a1.42 1.42 0 0 0 .09.867c.122.274.327.508.59.673S11.684 14 12 14c.424 0 .831-.158 1.131-.44.3-.28.469-.662.469-1.06m-8 1.5c-.316 0-.626-.088-.889-.253a1.53 1.53 0 0 1-.59-.673 1.4 1.4 0 0 1-.09-.867c.061-.29.214-.558.438-.768.223-.21.508-.352.819-.41s.632-.028.924.085c.293.114.543.306.718.553.176.246.27.536.27.833 0 .398-.169.78-.469 1.06-.3.282-.707.44-1.131.44m12.8 0c-.316 0-.626-.088-.889-.253a1.53 1.53 0 0 1-.59-.673 1.4 1.4 0 0 1-.09-.867c.061-.29.214-.558.438-.768.223-.21.509-.352.819-.41s.632-.028.924.085c.293.114.543.306.718.553.176.246.27.536.27.833 0 .398-.169.78-.469 1.06-.3.282-.707.44-1.131.44"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMore);
export default ForwardRef;
