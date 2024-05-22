import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgExit(
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
        d="M15.79 15.429v-2.572H9.895v-1.714h5.895V8.57L20 12zm-3.369.857H5.684V7.714h6.737V9.43h1.684V6.857a.87.87 0 0 0-.246-.606.84.84 0 0 0-.596-.251h-8.42a.84.84 0 0 0-.596.251.87.87 0 0 0-.247.606v10.286c0 .227.089.445.247.606s.372.251.595.251h8.421c.223 0 .438-.09.596-.251a.87.87 0 0 0 .246-.606V14.57h-1.684z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgExit);
export default ForwardRef;
