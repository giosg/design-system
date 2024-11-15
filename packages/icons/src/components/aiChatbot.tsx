import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgAiChatbot(
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
        d="m17.09 4-.916 2-1.992.91 1.992.915.917 1.993L18 7.825l2-.916L18 6zM9.819 6.182l-1.818 4L4 12l4 1.818 1.818 4 1.818-4 4-1.818-4-1.818zm7.273 8-.917 1.992-1.992.917 1.992.909.917 2L18 18l2-.91-2-.916z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAiChatbot);
export default ForwardRef;
