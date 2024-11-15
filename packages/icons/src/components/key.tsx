import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgKey(
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
        d="M12 1C8.107 1 5 3.841 5 7.346c0 2.435 1.514 4.546 3.733 5.61v7.37c0 .463.234.901.635 1.188l1.69 1.212c.255.183.563.274.87.274.342 0 .685-.114.953-.339l3.047-2.561a.605.605 0 0 0 .164-.742l-.825-1.65v-.041l1.122-1.262c.337-.38.354-.916.042-1.313l-1.164-1.477v-.658C17.487 11.892 19 9.78 19 7.347 19 3.84 15.893 1 12 1m0 1.692c2.83 0 5.133 2.088 5.133 4.654 0 1.728-1.049 3.305-2.739 4.114l-.994.477v2.22l1.217 1.544L13.4 17.07v1.003l.65 1.299-2.146 1.803-1.175-.843a.3.3 0 0 1-.129-.24v-8.155l-.994-.476c-1.69-.81-2.74-2.387-2.74-4.115C6.867 4.78 9.17 2.692 12 2.692m0 1.693c-1.03 0-1.867.757-1.867 1.692S10.97 7.769 12 7.769s1.867-.758 1.867-1.692c0-.935-.836-1.692-1.867-1.692"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgKey);
export default ForwardRef;
