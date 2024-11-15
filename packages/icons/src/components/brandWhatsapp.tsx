import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandWhatsapp(
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
      <g fill="currentColor" data-color="main">
        <path d="m16.275 13.322.044.021c.172.083.308.148.387.277.114.19.069.716-.104 1.196-.22.61-1.184 1.11-1.623 1.148l-.065.007c-.101.01-.216.02-.36.02-.342 0-.944-.058-2.215-.565-1.32-.528-2.622-1.658-3.666-3.184l-.009-.012-.029-.042c-.272-.359-.908-1.304-.908-2.305 0-1.112.533-1.745.847-1.943.297-.187.968-.276 1.092-.281l.088-.004h.013c.26 0 .447.158.589.497l.114.273c.18.436.506 1.22.53 1.266a.61.61 0 0 1 .018.576l-.03.06a1.4 1.4 0 0 1-.213.338q-.052.06-.106.126c-.075.09-.152.183-.224.254a.5.5 0 0 0-.077.09c0 .004.004.02.022.053.147.247 1.215 1.718 2.623 2.33.062.026.265.11.277.11s.034-.022.05-.04c.123-.139.52-.603.65-.798q.177-.26.443-.261a.9.9 0 0 1 .306.067c.21.076 1.301.61 1.536.726" />
        <path
          fillRule="evenodd"
          d="M3.319 11.775C3.319 6.936 7.285 3 12.159 3 17.035 3 21 6.936 21 11.775c0 4.837-3.966 8.773-8.84 8.773a8.9 8.9 0 0 1-4.185-1.043l-4.67 1.484a.233.233 0 0 1-.293-.298l1.519-4.48a8.7 8.7 0 0 1-1.212-4.436m4.987 5.797a7 7 0 0 0 3.854 1.148c3.86 0 7.002-3.115 7.002-6.945S16.02 4.828 12.16 4.828c-3.862 0-7.003 3.116-7.003 6.947 0 1.472.46 2.88 1.333 4.072a.23.23 0 0 1 .033.213l-.755 2.228 2.34-.744a.23.23 0 0 1 .198.028"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandWhatsapp);
export default ForwardRef;
