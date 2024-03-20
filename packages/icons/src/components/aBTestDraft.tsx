import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgABTestDraft({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M6 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgABTestDraft);
export default ForwardRef;
