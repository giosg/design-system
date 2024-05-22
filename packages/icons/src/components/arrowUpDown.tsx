import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgArrowUpDown(
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
        d="m11.83 8.549-3.183-4.22a.85.85 0 0 0-.284-.243.75.75 0 0 0-.695 0 .85.85 0 0 0-.284.244L4.2 8.549a1 1 0 0 0-.192.484c-.022.18.002.362.068.526a.9.9 0 0 0 .307.401c.134.097.29.15.449.15h2.351v8.507c0 .25.088.491.244.669a.8.8 0 0 0 .588.276.8.8 0 0 0 .589-.276c.156-.178.243-.418.243-.669V10.11H11.2a.77.77 0 0 0 .449-.149.9.9 0 0 0 .307-.401 1.06 1.06 0 0 0 .068-.526 1 1 0 0 0-.193-.484m.339 6.901 3.183 4.22a.85.85 0 0 0 .284.243.75.75 0 0 0 .695 0 .85.85 0 0 0 .284-.244l3.183-4.219a1 1 0 0 0 .193-.484 1.06 1.06 0 0 0-.068-.526.9.9 0 0 0-.307-.401.76.76 0 0 0-.449-.15h-2.35V5.384c0-.25-.087-.491-.243-.669a.8.8 0 0 0-.589-.276c-.22 0-.432.1-.588.276a1 1 0 0 0-.244.669v8.508h-2.353a.76.76 0 0 0-.449.149.9.9 0 0 0-.307.401c-.066.164-.09.347-.068.526s.089.347.193.484"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowUpDown);
export default ForwardRef;
