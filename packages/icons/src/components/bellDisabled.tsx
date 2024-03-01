import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgBellDisabled({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M12 21a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2m6-10a6 6 0 0 0-.08-.92L11 17h8v-1l-1-2zM5.707 18.293 18.293 5.707a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 0-1.414 0l-1.842 1.842c-.15-.068-.295-.145-.451-.2V5h-.023a2 2 0 0 0-3.993 0H10v.349A6 6 0 0 0 6 11v3l-2.293 2.293a1 1 0 0 0 0 1.414l.586.586a1 1 0 0 0 1.414 0"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBellDisabled);
export default ForwardRef;
