import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgPointerUp(
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
        d="m15.84 13.69-3.2-4.363A.8.8 0 0 0 12 9a.79.79 0 0 0-.64.327l-3.2 4.364a.83.83 0 0 0 .22 1.187c.126.08.271.122.42.122h6.4a.8.8 0 0 0 .42-.122.8.8 0 0 0 .296-.33.83.83 0 0 0-.076-.857"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPointerUp);
export default ForwardRef;
