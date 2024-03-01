import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgPhotoCamera({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M21 5h-3.586a1 1 0 0 1-.707-.294l-2.414-1.414A1 1 0 0 0 13.586 3h-3.172a1 1 0 0 0-.707.293L7.293 4.706A1 1 0 0 1 6.586 5H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 13H4V7h3.586a1 1 0 0 0 .707-.294L11 5h2l2.707 1.707a1 1 0 0 0 .707.293H20z"
      />
      <path
        fill="currentColor"
        d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4M18 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgPhotoCamera);
export default ForwardRef;
