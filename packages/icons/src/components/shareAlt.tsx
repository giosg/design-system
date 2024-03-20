import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgShareAlt({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path fill="currentColor" d="m20 11-6-6v4H9a4 4 0 0 0-4 4v4h1a4 4 0 0 1 4-4h4v4z" data-color="main" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgShareAlt);
export default ForwardRef;
