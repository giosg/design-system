import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgDownload({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="M20 16v4H4v-4h2v2h12v-2zm-8 0 4-5h-3V4h-2v7H8z" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;
