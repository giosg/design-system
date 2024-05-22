import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgSendMessage(
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
        d="M5 5.964v4.497L12.545 12 5 13.539v4.497c0 .17.05.335.144.482s.23.268.394.353.35.129.54.129c.189 0 .375-.044.539-.129l11.84-6.036c.165-.084.302-.206.398-.353A.9.9 0 0 0 19 12c0-.17-.05-.336-.145-.482a1.03 1.03 0 0 0-.398-.353L6.617 5.13a1.2 1.2 0 0 0-.54-.13c-.189 0-.375.045-.539.13a1 1 0 0 0-.394.352.9.9 0 0 0-.144.482"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSendMessage);
export default ForwardRef;
