import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandMeta(
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
        d="M15.918 6c-1.475 0-2.63 1.112-3.674 2.524C10.81 6.696 9.61 6 8.172 6 5.244 6 3 9.811 3 13.845c0 2.524 1.221 4.117 3.267 4.117 1.472 0 2.53-.695 4.413-3.985l1.325-2.34q.303.49.597.987l.883 1.485c1.72 2.877 2.677 3.853 4.413 3.853 1.993 0 3.102-1.614 3.102-4.191C21 9.547 18.706 6 15.918 6m-6.673 7.086c-1.526 2.392-2.054 2.929-2.904 2.929-.874 0-1.394-.768-1.394-2.137 0-2.928 1.46-5.923 3.2-5.923.943 0 1.73.544 2.937 2.272a246 246 0 0 0-1.84 2.86m5.76-.301-1.056-1.76q-.428-.697-.823-1.283c.95-1.468 1.736-2.2 2.669-2.2 1.938 0 3.49 2.855 3.49 6.36 0 1.337-.439 2.113-1.346 2.113-.869 0-1.284-.574-2.934-3.23"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandMeta);
export default ForwardRef;
