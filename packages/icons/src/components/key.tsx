import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgKey({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M12.192 3A5.18 5.18 0 0 0 7 8.192a5.19 5.19 0 0 0 2.77 4.59v6.03c0 .379.173.737.47.972l1.253.992a1.036 1.036 0 0 0 1.353-.053l2.26-2.096a.53.53 0 0 0 .122-.607l-.613-1.35v-.033l.833-1.033c.25-.31.263-.75.03-1.074l-.863-1.209v-.538a5.19 5.19 0 0 0 2.77-4.59A5.18 5.18 0 0 0 12.192 3m0 1.385c2.1 0 3.808 1.708 3.808 3.807a3.8 3.8 0 0 1-2.032 3.367l-.737.39v1.816l.902 1.263-.902 1.12v.821l.482 1.062-1.592 1.476-.872-.69a.25.25 0 0 1-.095-.196v-6.672l-.738-.39a3.8 3.8 0 0 1-2.031-3.367 3.81 3.81 0 0 1 3.807-3.807m0 1.384a1.385 1.385 0 1 0 0 2.77 1.385 1.385 0 0 0 0-2.77"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgKey);
export default ForwardRef;
