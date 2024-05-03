import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgBrandInstagram({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M12 4.622c2.403 0 2.688.01 3.637.053 2.44.11 3.579 1.268 3.69 3.689.043.949.051 1.234.051 3.637s-.009 2.688-.051 3.637c-.112 2.418-1.248 3.578-3.69 3.689-.949.043-1.232.052-3.637.052-2.403 0-2.688-.009-3.637-.052-2.445-.112-3.578-1.275-3.689-3.69-.044-.949-.053-1.233-.053-3.637s.01-2.687.053-3.637c.112-2.42 1.248-3.578 3.69-3.689.949-.043 1.233-.052 3.636-.052M12 3c-2.444 0-2.75.01-3.71.054-3.269.15-5.085 1.964-5.235 5.235C3.01 9.249 3 9.556 3 12s.01 2.751.054 3.711c.15 3.269 1.964 5.085 5.235 5.235.96.043 1.267.054 3.711.054s2.751-.01 3.711-.054c3.266-.15 5.086-1.963 5.234-5.235.044-.96.055-1.267.055-3.711s-.01-2.75-.054-3.71c-.147-3.266-1.963-5.085-5.234-5.235C14.75 3.01 14.444 3 12 3m0 4.379a4.622 4.622 0 1 0 0 9.243 4.622 4.622 0 0 0 0-9.244M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m4.805-8.884a1.08 1.08 0 1 0-.001 2.161 1.08 1.08 0 0 0 0-2.16"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandInstagram);
export default ForwardRef;