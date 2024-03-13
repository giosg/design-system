import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgUserDeletedUser({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M5.575 17.218A2 2 0 0 0 7.422 20H12v-7a7 7 0 0 0-6.425 4.218M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m7.707 4.707-1.414-1.415-1.793 1.793-1.793-1.792-1.414 1.414 1.792 1.792-1.794 1.794 1.414 1.414 1.794-1.794 1.794 1.794 1.414-1.414-1.793-1.793z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgUserDeletedUser);
export default ForwardRef;
