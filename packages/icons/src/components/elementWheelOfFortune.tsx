import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgElementWheelOfFortune({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m20.709 15.41-4.313-2.7a.843.843 0 0 1 0-1.43l4.313-2.7A.844.844 0 0 1 22 9.3v5.4a.844.844 0 0 1-1.291.71M19.475 17l-1.691-1.057a7 7 0 1 1 0-7.882L19.481 7A9 9 0 1 0 5.73 18.449L4 19.999v2h16v-2l-1.73-1.55c.45-.44.855-.926 1.205-1.45M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgElementWheelOfFortune);
export default ForwardRef;
