import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgRule(
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
        d="M18 3H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4v-2H5V5h12v3h2V4a1 1 0 0 0-1-1m-2 5h-2v2.1a5 5 0 0 0-1.754.73l-1.489-1.487-1.414 1.414 1.489 1.489A5 5 0 0 0 10.1 14H8v2h2.1c.128.626.376 1.222.73 1.754l-1.487 1.489 1.414 1.414 1.489-1.489A4.9 4.9 0 0 0 14 19.9V22h2v-2.1a4.9 4.9 0 0 0 1.754-.731l1.489 1.489 1.414-1.415-1.488-1.488A5 5 0 0 0 19.9 16H22v-2h-2.1a5 5 0 0 0-.73-1.754l1.488-1.489-1.415-1.414-1.489 1.488A5 5 0 0 0 16 10.1zm-1 10a3 3 0 1 1 0-5.999A3 3 0 0 1 15 18"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgRule);
export default ForwardRef;
