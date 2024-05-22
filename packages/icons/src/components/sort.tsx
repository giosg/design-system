import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSort(
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
        d="M11.16 4.47 8.236 8.719a1.36 1.36 0 0 0-.23.64c-.022.233.012.47.1.682s.226.392.397.517c.172.126.37.192.573.192h5.848a.97.97 0 0 0 .573-.192c.172-.125.31-.304.397-.517.088-.212.122-.449.1-.683a1.4 1.4 0 0 0-.23-.64l-2.924-4.25a1.1 1.1 0 0 0-.374-.345A.95.95 0 0 0 12 4a.95.95 0 0 0-.466.124 1.1 1.1 0 0 0-.374.346m1.68 15.06 2.924-4.25a1.43 1.43 0 0 0 .129-1.322 1.2 1.2 0 0 0-.397-.516.97.97 0 0 0-.572-.192H9.076a.97.97 0 0 0-.573.192 1.2 1.2 0 0 0-.397.517 1.4 1.4 0 0 0-.1.683c.024.234.103.455.23.64l2.924 4.25c.1.146.229.264.374.345A.95.95 0 0 0 12 20q.245 0 .466-.124c.146-.081.273-.2.374-.346"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSort);
export default ForwardRef;
