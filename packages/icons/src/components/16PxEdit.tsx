import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function Svg16PxEdit(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
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
        d="M4 9.966 6 12l-1 1H3v-2Zm8.293-5.673-.586-.586a1 1 0 0 0-1.414 0L5 9l2 2 5.293-5.293a1 1 0 0 0 0-1.414"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(Svg16PxEdit);
export default ForwardRef;
