import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgRadioButtonUnselected({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
        clipRule="evenodd"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgRadioButtonUnselected);
export default ForwardRef;
