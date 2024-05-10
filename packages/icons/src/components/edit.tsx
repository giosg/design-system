import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgEdit(
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
        d="m20.293 6.293-3.586-3.586a1 1 0 0 0-1.414 0L13.5 4.5 12 6l-8.707 8.707a1 1 0 0 0-.293.707V19a1 1 0 0 0 1 1h3.586a1 1 0 0 0 .707-.293l12-12a1 1 0 0 0 0-1.414m-6.879 1.121 2.172 2.172-5.5 5.5-2.172-2.172zM7.172 18H5v-2.172l1.414-1.414 2.172 2.172zm9.914-9.914-2.172-2.172L16 4.828 18.172 7zM19 19a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
