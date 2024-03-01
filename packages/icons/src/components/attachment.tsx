import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgAttachment({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M18 7H7.5a5.5 5.5 0 1 0 0 11H16v-2H7.5a3.5 3.5 0 1 1 0-7H18a2 2 0 0 1 0 4H7.5a.5.5 0 0 1 0-1H16v-2H7.5a2.5 2.5 0 0 0 0 5H18a4 4 0 1 0 0-8"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
