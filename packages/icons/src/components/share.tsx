import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgShare(
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
        d="M16.202 14.666a2.85 2.85 0 0 0-1.804.644l-3.903-2.6c.15-.46.15-.953 0-1.414l3.903-2.605c.486.39 1.097.61 1.732.623a2.88 2.88 0 0 0 1.76-.55 2.65 2.65 0 0 0 1.01-1.477 2.54 2.54 0 0 0-.183-1.756 2.72 2.72 0 0 0-1.296-1.259 2.9 2.9 0 0 0-1.839-.208 2.8 2.8 0 0 0-1.57.935 2.58 2.58 0 0 0-.608 1.666q.003.244.051.481L9.43 9.833a2.92 2.92 0 0 0-2.909-.205 2.75 2.75 0 0 0-1.11.982c-.268.419-.41.9-.41 1.39s.142.972.41 1.39a2.75 2.75 0 0 0 1.11.983 2.92 2.92 0 0 0 2.909-.206l4.021 2.682q-.046.24-.046.484c0 .527.164 1.043.471 1.482.308.438.745.78 1.256.982a2.93 2.93 0 0 0 1.617.152 2.84 2.84 0 0 0 1.432-.73 2.63 2.63 0 0 0 .766-1.366 2.55 2.55 0 0 0-.159-1.54 2.7 2.7 0 0 0-1.03-1.197 2.9 2.9 0 0 0-1.555-.45"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
