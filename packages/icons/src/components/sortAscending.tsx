import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSortAscending({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m12.781 5.976 2.719 3.4A1 1 0 0 1 14.72 11H9.281A1 1 0 0 1 8.5 9.375l2.719-3.4a1 1 0 0 1 1.562.001M14.72 14H9.281L12 17.4zm0-1a1 1 0 0 1 .78 1.625l-2.719 3.4a1 1 0 0 1-1.562 0l-2.719-3.4A1 1 0 0 1 9.281 13z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSortAscending);
export default ForwardRef;
