import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSave({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M15 14a3 3 0 1 1-5.999 0A3 3 0 0 1 15 14m7-8v15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h15zM8 4v3h8V4zm12 3-2-2v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4H4v16h16z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;
