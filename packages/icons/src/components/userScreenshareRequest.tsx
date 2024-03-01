import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgUserScreenshareRequest({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M9.881 13v6.925H6.3a2 2 0 0 1-1.848-2.782A7 7 0 0 1 9.881 13M13.5 9.924a3.994 3.994 0 1 0-3.594.867.99.99 0 0 1 .973-.867zm7.379 2v6a1 1 0 0 1-1 1h-2l1 1v1h-6v-1l1-1h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1.002 1zm-2 1h-6v4h6z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserScreenshareRequest);
export default ForwardRef;
