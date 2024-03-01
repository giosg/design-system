import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPin({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m19.293 7.293-3.586-3.586a1 1 0 0 0-1.414 0L14 4v1l-2.563 2.563a1 1 0 0 1-1.023.242L8 7 6.707 8.293a1 1 0 0 0 0 1.414L9 12l-1.764 1.764A13.4 13.4 0 0 0 4 19a13.4 13.4 0 0 0 5.235-3.236L11 14l2.293 2.293a1 1 0 0 0 1.414 0L16 15l-.8-2.414a1 1 0 0 1 .241-1.023L18 9h1l.293-.293a1 1 0 0 0 0-1.414m-2.707.293-2.563 2.563a2.98 2.98 0 0 0-.725 3.07l.126.376L9.4 9.576l.376.126a3 3 0 0 0 3.07-.725l2.563-2.563.086-.086L16.672 7.5z"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;
