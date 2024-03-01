import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSendDisabled({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.48 11.132-3.3-1.886-3.126 7.3 6.426-3.673a1 1 0 0 0 0-1.736M14.442 5.1a1.383 1.383 0 0 0-1.8.732l-.477 1.115L8.5 4.854a1 1 0 0 0-1.5.869V10.4l3.357.768-.792 1.847L7 13.6v4.676a1 1 0 0 0 1.5.869l1.909-1.092 4.747-11.084a1.407 1.407 0 0 0-.714-1.869"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSendDisabled);
export default ForwardRef;
