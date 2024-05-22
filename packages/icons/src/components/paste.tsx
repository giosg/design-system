import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgPaste(
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
        d="M20 4.941v5.647h-2V5.882H6v11.295h5v1.882H5c-.265 0-.52-.1-.707-.276A.9.9 0 0 1 4 18.118V4.94a.9.9 0 0 1 .293-.665C4.48 4.099 4.735 4 5 4h14c.265 0 .52.1.707.276A.9.9 0 0 1 20 4.94m-8 10.353L16 20l4-4.706h-3V11.53h-2v3.765z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPaste);
export default ForwardRef;
