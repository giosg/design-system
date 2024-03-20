import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgBot({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M15 16H9v-2h6zm5 .816V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.184a2.982 2.982 0 0 1 0-5.632V9a2 2 0 0 1 2-2h3.273a.94.94 0 0 0 .842-.465A1 1 0 0 1 11 6V4.722a2 2 0 1 1 2 0V6a1 1 0 0 1 .885.535.94.94 0 0 0 .842.465H18a2 2 0 0 1 2 2v2.184a2.982 2.982 0 0 1 0 5.632M18 9H6v9h12zm-7 2H9v2h2zm4 0h-2v2h2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBot);
export default ForwardRef;
