import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgAnswerWrong({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <g fill="currentColor" data-color="main">
        <path d="M10.284 10 8 12.284 9.716 14 12 11.716 14.284 14 16 12.284 13.716 10 16 7.716 14.284 6 12 8.284 9.716 6 8 7.716z" />
        <path
          fillRule="evenodd"
          d="M6 18h2.64v3.19a1 1 0 0 0 1.692.72l4.136-3.973.032.063H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4M18 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.64v2.842L13.5 16s.186-.02.422 0H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAnswerWrong);
export default ForwardRef;
