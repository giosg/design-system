import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgMicrophoneDisabled(
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
        d="M6.921 14.877A8.04 8.04 0 0 1 6 11.111h1.5c0 .86.178 1.707.518 2.466zm7.669-9.09c-.328-.68-.836-1.211-1.445-1.513a2.56 2.56 0 0 0-1.924-.154c-.638.202-1.202.648-1.604 1.27A4 4 0 0 0 9 7.554v3.556c.005.376.061.748.168 1.103zm1.91 5.324c0 .883-.187 1.753-.541 2.53a5.1 5.1 0 0 1-1.49 1.924 4.06 4.06 0 0 1-2.082.854 3.9 3.9 0 0 1-2.175-.42l1.188-1.405a2.54 2.54 0 0 0 1.318-.031 2.85 2.85 0 0 0 1.18-.698c.344-.334.622-.754.812-1.23s.29-.997.29-1.524v-.782l2.781-3.295-1.061-1.257-10.5 12.445 1.06 1.258 1.817-2.154a5.35 5.35 0 0 0 2.151.836V20h1.5v-1.84c1.45-.215 2.782-1.05 3.75-2.349.966-1.298 1.5-2.97 1.501-4.7z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgMicrophoneDisabled);
export default ForwardRef;
