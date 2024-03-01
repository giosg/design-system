import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgAnswerWrong({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h2.694l1.806-2h3l1 2H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.64 21.19V16h2v2.842L13.5 16s.838-.091 1.221.307a1 1 0 0 1-.028 1.414l-4.36 4.19a1 1 0 0 1-1.694-.722"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M8 12.284 14.284 6 16 7.716 9.716 14z" />
      <path fill="currentColor" d="M14.284 14 8 7.716 9.716 6 16 12.284z" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgAnswerWrong);
export default ForwardRef;
