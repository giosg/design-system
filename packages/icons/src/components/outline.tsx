import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgOutline(
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
        d="M11.96 16.8q.42 0 .71-.29a.96.96 0 0 0 .29-.71.97.97 0 0 0-.29-.71.96.96 0 0 0-.71-.29.96.96 0 0 0-.71.29.97.97 0 0 0-.29.71q0 .42.29.71t.71.29m-.72-3.08h1.48q0-.66.15-1.04t.85-1.04q.52-.52.82-.99t.3-1.13q0-1.12-.82-1.72t-1.94-.6q-1.14 0-1.85.6t-.99 1.44l1.32.52q.1-.36.45-.78t1.07-.42q.64 0 .96.35t.32.77q0 .4-.24.75t-.6.65q-.88.78-1.08 1.18t-.2 1.46M12 20a7.8 7.8 0 0 1-3.12-.63 8.1 8.1 0 0 1-2.54-1.71 8.1 8.1 0 0 1-1.71-2.54A7.8 7.8 0 0 1 4 12q0-1.66.63-3.12t1.71-2.54a8.1 8.1 0 0 1 2.54-1.71A7.8 7.8 0 0 1 12 4q1.66 0 3.12.63t2.54 1.71 1.71 2.54T20 12t-.63 3.12-1.71 2.54a8.1 8.1 0 0 1-2.54 1.71Q13.66 20 12 20m0-1.6q2.68 0 4.54-1.86T18.4 12t-1.86-4.54T12 5.6 7.46 7.46 5.6 12t1.86 4.54T12 18.4"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgOutline);
export default ForwardRef;
