import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCompare(
  { color, colorAcc, colorAlt, style, ...props }: SvgComponentProps,
  ref: Ref<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      style={{
        ...generateIconCssVars({
          color,
          colorAcc,
          colorAlt,
        }),
        ...style,
      }}
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="m15.451 11.83 4.22-3.183a.85.85 0 0 0 .243-.284.75.75 0 0 0 0-.695.85.85 0 0 0-.244-.284L15.451 4.2a1 1 0 0 0-.484-.192 1.06 1.06 0 0 0-.526.068.9.9 0 0 0-.401.307.76.76 0 0 0-.15.449v2.351H5.384c-.25 0-.491.088-.669.244a.8.8 0 0 0-.276.588c0 .221.1.433.276.589.178.156.418.243.669.243h8.508V11.2c0 .159.052.315.149.449.098.134.237.24.401.307.164.066.347.09.526.068a1 1 0 0 0 .484-.193m-6.903.339-4.22 3.183a.85.85 0 0 0-.243.284.75.75 0 0 0 0 .695q.087.166.244.284L8.549 19.8c.137.104.305.17.484.193.18.022.362-.002.526-.068a.9.9 0 0 0 .401-.307.76.76 0 0 0 .15-.449v-2.35h8.507c.25 0 .491-.087.669-.243a.8.8 0 0 0 .276-.589c0-.22-.1-.432-.276-.588a1 1 0 0 0-.669-.244H10.11v-2.353a.76.76 0 0 0-.149-.449.9.9 0 0 0-.401-.307 1.06 1.06 0 0 0-.526-.068 1 1 0 0 0-.484.193"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCompare);
export default ForwardRef;
