import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgUserAddUser({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M6 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m5 6.075a6.97 6.97 0 0 0-7.425 4.143A2 2 0 0 0 5.422 20H14v-2h-3zM18 14v-3h-2v3h-3v2h3v3h2v-3h3v-2z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserAddUser);
export default ForwardRef;
