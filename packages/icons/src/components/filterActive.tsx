import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgFilterActive({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M14.027 11A4.96 4.96 0 0 0 17 12v1H7v-2zM12 7H4v2h8.422A5 5 0 0 1 12 7m-2 10h4v-2h-4z"
        data-color="main"
      />
      <path fill="currentColor" d="M15.333 4.506a3 3 0 1 1 3.334 4.988 3 3 0 0 1-3.334-4.988" data-color="accent" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFilterActive);
export default ForwardRef;
