import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgUserConversion({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-5 6.075a7.01 7.01 0 0 0-5.426 4.143A2 2 0 0 0 7.422 20H11zM21 13l-4-3v2h-3a2 2 0 0 0-2 2v2h2v-2h3v2zm-2 3v2h-3v-2l-4 3 4 3v-2h3a2 2 0 0 0 2-2v-2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserConversion);
export default ForwardRef;
