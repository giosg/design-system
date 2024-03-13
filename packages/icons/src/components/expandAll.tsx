import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgExpandAll({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M18 11H6a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2M6 9h12a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2m-1 7a1 1 0 0 0 1 1h4v-2H6a1 1 0 0 0-1 1m11.959-.96L15 17l-1.959-1.96a1.063 1.063 0 0 0-1.752.331 1.06 1.06 0 0 0 .252 1.17l2.709 2.708a1.06 1.06 0 0 0 1.5 0l2.709-2.709a1.06 1.06 0 0 0-.331-1.752 1.06 1.06 0 0 0-1.169.252"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgExpandAll);
export default ForwardRef;
