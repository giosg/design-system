import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgView({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m21.5 10.126-1.824-2.281A9.28 9.28 0 0 0 12 4a9.27 9.27 0 0 0-7.677 3.847L2.5 10.126a3 3 0 0 0 0 3.748l1.823 2.278A9.27 9.27 0 0 0 12 20a9.27 9.27 0 0 0 7.677-3.846l1.824-2.28a3 3 0 0 0-.001-3.748M12 18c-3.859 0-7-2.691-7-6s3.141-6 7-6 7 2.691 7 6-3.141 6-7 6m4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgView);
export default ForwardRef;
