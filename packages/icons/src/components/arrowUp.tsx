import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgArrowUp({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m16.585 8.349-3.826-4.463a1 1 0 0 0-1.518 0L7.415 8.349A1 1 0 0 0 8.174 10H11v9a1 1 0 0 0 2 0v-9h2.826a1 1 0 0 0 .759-1.651"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
