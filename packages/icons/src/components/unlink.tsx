import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgUnlink({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M10.783 4.03a1.001 1.001 0 0 0-1.844-.224 1 1 0 0 0-.08.769L9.4 6.5a1 1 0 1 0 1.924-.545zm3.806 13.446a.973.973 0 0 0-1.2-.672l-.05.014a.974.974 0 0 0-.672 1.2L13.224 20a.974.974 0 0 0 1.2.672l.05-.014a.974.974 0 0 0 .672-1.2zM13.337 7.182l.05.014a.973.973 0 0 0 1.2-.672l.559-1.974a.974.974 0 0 0-.672-1.2l-.05-.014a.974.974 0 0 0-1.2.672l-.559 1.974a.974.974 0 0 0 .672 1.2m-2.699 9.629A1 1 0 0 0 9.4 17.5l-.545 1.924a1 1 0 1 0 1.924.545l.545-1.924a1 1 0 0 0-.686-1.234M18 8h-2a2 2 0 0 0-2 2h4a2 2 0 0 1 0 4h-4a2 2 0 0 0 2 2h2a4 4 0 1 0 0-8m-8 6H6a2 2 0 1 1 0-4h4a2 2 0 0 0-2-2H6a4 4 0 0 0 0 8h2a2 2 0 0 0 2-2"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUnlink);
export default ForwardRef;
