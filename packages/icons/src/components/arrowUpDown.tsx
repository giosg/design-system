import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgArrowUpDown({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M13.41 8.812 9.586 4.349a1 1 0 0 0-1.518 0L4.24 8.812a1 1 0 0 0 .76 1.65h2.826v9a1 1 0 1 0 2 0v-9h2.826a1 1 0 0 0 .759-1.65"
      />
      <path
        fill="currentColor"
        d="m11.415 16.114 3.826 4.463a1 1 0 0 0 1.518 0l3.826-4.463a1 1 0 0 0-.76-1.651h-2.823v-9a1 1 0 1 0-2 0v9h-2.828a1 1 0 0 0-.76 1.65"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowUpDown);
export default ForwardRef;
