import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgTeam({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M12 13a5 5 0 0 0-4.842 3.749A1 1 0 0 0 8.132 18h7.736a1 1 0 0 0 .974-1.251A5 5 0 0 0 12 13m0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m15.842 3.743A3.66 3.66 0 0 0 18 12a4.1 4.1 0 0 0-2.777.957A5.96 5.96 0 0 1 17.648 16h3.221a1.01 1.01 0 0 0 .973-1.257M8.777 12.957A4.1 4.1 0 0 0 6 12a3.66 3.66 0 0 0-3.842 2.743A1.007 1.007 0 0 0 3.131 16h3.221a5.95 5.95 0 0 1 2.425-3.043"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgTeam);
export default ForwardRef;
