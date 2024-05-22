import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowUp(
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
        d="m15.8 8.677-3.17-4.338a.9.9 0 0 0-.284-.25.73.73 0 0 0-.692 0 .9.9 0 0 0-.283.25L8.2 8.677c-.104.14-.17.314-.192.498s.002.371.068.54a.94.94 0 0 0 .306.412c.133.1.288.154.447.154h2.342v8.747c0 .258.088.505.243.687A.77.77 0 0 0 12 20a.77.77 0 0 0 .586-.285c.155-.182.243-.43.243-.687v-8.747h2.342a.74.74 0 0 0 .447-.154c.134-.1.24-.243.306-.412s.09-.356.068-.54a1.06 1.06 0 0 0-.192-.498"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
