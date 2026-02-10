import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgPreviewEmail(
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
        d="M5 5h14v6h2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5v-2H5Zm17 12c0 2.761-2.686 5-6 5s-6-2.239-6-5 2.686-5 6-5 6 2.239 6 5m-2 0a3.15 3.15 0 0 0-2-2.756V16a2 2 0 0 1-4 0v-1.756A3.15 3.15 0 0 0 12 17c0 1.767 1.791 3.2 4 3.2s4-1.433 4-3.2m-3-7H7V8h10Zm-7 4H7v-2h3Z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPreviewEmail);
export default ForwardRef;
