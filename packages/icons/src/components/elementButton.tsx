import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgElementButton({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M16 5H8a6 6 0 0 0-6 6v2a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-2a6 6 0 0 0-6-6m0 10H8a4 4 0 1 1 0-8h8a4 4 0 1 1 0 8"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgElementButton);
export default ForwardRef;
