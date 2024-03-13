import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgWarning({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m20.227 14.986-6.5-11.055a2 2 0 0 0-3.448 0l-6.5 11.055A2 2 0 0 0 5.5 18h13a2 2 0 0 0 1.727-3.014M13 16h-2v-2h2zm0-5a1 1 0 1 1-2 0V7h2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;
