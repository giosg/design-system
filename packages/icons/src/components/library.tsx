import type { Ref } from "react";
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
        d="M8.24 6c-1.741 0-2.942.614-3.602 1.078A1.45 1.45 0 0 0 4 8.265v9.023c0 .414.377.712.784.712.134 0 .27-.032.396-.101.72-.393 1.793-.82 3.06-.82a5.2 5.2 0 0 1 2.4.584c.421.219.89.328 1.36.328s.939-.11 1.36-.328a5.2 5.2 0 0 1 2.4-.584c1.267 0 2.34.427 3.06.82a.8.8 0 0 0 .396.1c.407 0 .784-.297.784-.711V8.265c0-.463-.233-.902-.638-1.187C18.702 6.614 17.501 6 15.761 6c-1.392 0-2.355.315-2.974.635-.31.16-.531.32-.677.442l-.11.098-.11-.098a3.7 3.7 0 0 0-.677-.442C10.594 6.315 9.631 6 8.24 6m-2.6 2.262q.045-.033.13-.088c.12-.076.296-.178.524-.28a4.8 4.8 0 0 1 1.944-.408c1.326 0 2.32.583 2.94 1.087v7.56c-.652-.262-1.643-.54-2.94-.54-.982 0-1.864.196-2.598.453zm7.18 7.871v-7.56c.62-.505 1.614-1.087 2.94-1.087.828 0 1.491.202 1.947.403a4 4 0 0 1 .651.364v7.793a7.9 7.9 0 0 0-2.598-.452c-1.294 0-2.287.278-2.94.54"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgLibrary);
export default ForwardRef;
