import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPause({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="M10 6H6v12h4zm8 0h-4v12h4z" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;
