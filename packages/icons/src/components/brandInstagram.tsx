import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandInstagram(
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
        d="M12 5.442c2.136 0 2.39.008 3.233.047 2.168.098 3.181 1.127 3.28 3.279.038.843.046 1.097.046 3.233s-.008 2.389-.046 3.232c-.1 2.15-1.11 3.181-3.28 3.28-.844.038-1.096.046-3.233.046s-2.39-.008-3.233-.046c-2.173-.1-3.18-1.133-3.279-3.28-.039-.844-.047-1.096-.047-3.233s.009-2.389.047-3.233c.1-2.151 1.11-3.18 3.28-3.279.843-.038 1.096-.046 3.232-.046M12 4c-2.173 0-2.445.01-3.298.048-2.905.133-4.52 1.745-4.653 4.653C4.009 9.555 4 9.827 4 12s.01 2.445.048 3.299c.133 2.905 1.745 4.52 4.653 4.653.854.039 1.126.048 3.299.048s2.445-.01 3.299-.048c2.902-.133 4.521-1.745 4.652-4.653.04-.854.049-1.126.049-3.299s-.01-2.445-.048-3.298c-.13-2.903-1.745-4.52-4.653-4.653C14.445 4.009 14.173 4 12 4m0 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216m0 6.775a2.666 2.666 0 1 1 0-5.333 2.666 2.666 0 0 1 0 5.333m4.27-7.897a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandInstagram);
export default ForwardRef;
