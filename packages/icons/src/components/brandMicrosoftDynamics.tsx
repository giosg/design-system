import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgBrandMicrosoftDynamics({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m7 21 3.478-10.064L7 8.636zm11-6.225V9.062L7 21zM7 3v4.823l7.178 3.55 3.337-2.737z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandMicrosoftDynamics);
export default ForwardRef;
