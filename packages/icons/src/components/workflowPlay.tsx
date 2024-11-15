import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgWorkflowPlay(
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
        <path d="M9.666 9.02a.4.4 0 0 0-.066.22v5.52q0 .117.066.22a.5.5 0 0 0 .18.16.54.54 0 0 0 .493.001l5.413-2.76a.5.5 0 0 0 .181-.16.4.4 0 0 0 0-.442.5.5 0 0 0-.181-.16l-5.413-2.76a.54.54 0 0 0-.493 0 .5.5 0 0 0-.18.161" />
        <path
          fillRule="evenodd"
          d="M7.555 5.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304m.988 11.826a6.222 6.222 0 1 0 6.914-10.348 6.222 6.222 0 0 0-6.914 10.348"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWorkflowPlay);
export default ForwardRef;
