import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBrandSignicat(
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
      <g fill="currentColor" data-color="main">
        <path d="M9.533 12.515c-.267 0-.473-.172-.473-.463 0-.32.207-.51.473-.51.27 0 .473.206.473.488a.47.47 0 0 1-.473.485m6.376.021a.475.475 0 0 1-.49-.485c0-.298.228-.497.49-.497.242 0 .493.188.493.497a.486.486 0 0 1-.494.485" />
        <path
          fillRule="evenodd"
          d="M11.999 9.882V8.303H20v7.394h-8v-1.58C11.235 15.249 9.876 16 8.328 16 5.938 16 4 14.208 4 12s1.937-4 4.327-4c1.55 0 2.907.752 3.672 1.882m-5.165 2.956c.525 0 .874-.286.874-.673 0-.368-.267-.566-.768-.657-.297-.053-.597-.144-.597-.369 0-.146.147-.272.411-.272s.498.114.498.29c0 .039-.01.066-.02.097l-.005.014.358.114a.46.46 0 0 0 .068-.24c0-.364-.361-.614-.862-.614-.498 0-.823.287-.823.61 0 .412.33.607.843.684.381.064.5.184.5.353 0 .183-.178.32-.473.32-.273 0-.525-.11-.525-.334q.001-.056.02-.121l-.357-.136a.5.5 0 0 0-.07.247c.004.415.355.687.928.687m1.158-1.992c0 .121.1.213.23.213.132 0 .236-.092.236-.213s-.102-.217-.235-.217c-.13 0-.23.096-.23.217m.414.44h-.362v1.518h.362zm1.583.203c-.102-.144-.26-.235-.52-.235-.434 0-.78.316-.78.797 0 .463.33.753.743.753.278 0 .469-.11.553-.272v.162c0 .287-.12.488-.434.488-.227 0-.398-.105-.45-.311l-.33.128c.12.334.398.474.78.474.52 0 .796-.33.796-.794v-1.397H9.99zm1.487.051c-.213 0-.389.148-.389.416l-.006-.002v.849h-.362v-1.518h.362v.221c.124-.182.314-.252.518-.252.334 0 .577.201.577.558v.994h-.362v-.88c0-.25-.135-.386-.338-.386m2.066.494c0-.335.26-.493.486-.493.242 0 .418.14.45.364l.33-.094c-.069-.353-.382-.559-.78-.559-.45 0-.831.316-.831.783 0 .481.347.802.882.802.399 0 .729-.21.816-.61l-.33-.11c-.037.224-.176.433-.5.433a.516.516 0 0 1-.523-.516m2.844-.505v-.247h.367v1.522h-.347v-.257q-.197.288-.572.287a.757.757 0 0 1-.776-.783c0-.467.32-.802.776-.802.262 0 .458.108.552.28m1.512 1.306c.31 0 .52-.176.552-.48l-.346-.064c-.012.176-.089.256-.228.256-.102 0-.207-.063-.207-.21v-.764h.624v-.291h-.624v-.486h-.36v.486h-.33v.286h.33v.752c-.004.305.187.515.589.515m-5.17-1.776c-.131 0-.23-.092-.23-.213s.099-.217.23-.217c.133 0 .235.096.235.217s-.103.213-.235.213m-.178.227h.361v1.518h-.361z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandSignicat);
export default ForwardRef;
