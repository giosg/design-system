import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgFrown({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M16 16a4 4 0 1 0-8 0h1.918c0-.274.053-.546.158-.8a2.1 2.1 0 0 1 1.124-1.124 2.09 2.09 0 0 1 2.724 1.124c.105.254.158.526.158.8zm-5-6V9a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0m4 0V9a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0"
      />
      <path fill="currentColor" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgFrown);
export default ForwardRef;
