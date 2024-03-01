import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCorrect({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m4 7-4.5 4.5a1.41 1.41 0 0 1-1.994 0l-2.006-2a1.41 1.41 0 0 1 0-1.994V11.5a1.41 1.41 0 0 1 1.994 0l1 1L14 9a1.41 1.41 0 0 1 2 0 1.41 1.41 0 0 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCorrect);
export default ForwardRef;
