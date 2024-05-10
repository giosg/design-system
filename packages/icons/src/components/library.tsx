import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgLibrary(
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
        fillRule="evenodd"
        d="M7.875 4.725c-1.909 0-3.226.744-3.95 1.307-.444.345-.7.876-.7 1.437v10.933c0 .502.413.863.86.863a.84.84 0 0 0 .435-.122c.789-.476 1.966-.993 3.355-.993a5.27 5.27 0 0 1 2.633.708 3 3 0 0 0 2.985 0 5.27 5.27 0 0 1 2.632-.708c1.389 0 2.566.516 3.355.992a.84.84 0 0 0 .435.123c.447 0 .86-.36.86-.863V7.47c0-.561-.256-1.092-.7-1.437-.724-.563-2.041-1.307-3.95-1.307-1.526 0-2.583.382-3.262.77a4 4 0 0 0-.742.535A3 3 0 0 0 12 6.15a3 3 0 0 0-.12-.119 4 4 0 0 0-.743-.535c-.679-.388-1.736-.77-3.262-.77m-2.85 2.741a4.3 4.3 0 0 1 .717-.446 4.8 4.8 0 0 1 2.133-.495c1.454 0 2.545.707 3.225 1.318v9.16c-.716-.317-1.803-.653-3.225-.653a7.9 7.9 0 0 0-2.85.547zm7.875 9.537V7.842c.68-.61 1.77-1.317 3.225-1.317.908 0 1.636.245 2.136.49a4.3 4.3 0 0 1 .714.44v9.442a7.9 7.9 0 0 0-2.85-.547c-1.42 0-2.508.336-3.225.653"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLibrary);
export default ForwardRef;
