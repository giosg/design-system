import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCompany({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M10 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m12-3v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2M9 7h6V5H9zm11 2H4v8h2v-7h2v7h8v-7h2v7h2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCompany);
export default ForwardRef;
