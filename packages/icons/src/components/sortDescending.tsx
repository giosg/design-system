import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgSortDescending({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M11.219 18.024 8.5 14.625A1 1 0 0 1 9.281 13h5.439a1 1 0 0 1 .781 1.625l-2.72 3.4a1 1 0 0 1-1.562-.001M12 6.6 9.281 10h5.439zm0-1a1 1 0 0 1 .781.375l2.719 3.4A1 1 0 0 1 14.72 11H9.281A1 1 0 0 1 8.5 9.375l2.719-3.4A1 1 0 0 1 12 5.6"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgSortDescending);
export default ForwardRef;
