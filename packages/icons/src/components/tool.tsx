import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgTool({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M20.58 8.09c-.349-.303-.849-.375-1.37-.198q-.283.097-.558.196l-.53.186-.412.143c-.385.134-.784.273-1.177.383-.236.065-.33.02-.435-.208a5.5 5.5 0 0 1-.311-.9c-.025-.096-.026-.2.14-.306q.161-.104.34-.173c.208-.08.426-.157.638-.23l.264-.093.46-.162c.344-.12.701-.245 1.051-.376.648-.243.985-.803.857-1.427-.066-.322-.25-.596-.564-.839-.912-.705-1.987-1.07-3.2-1.086h-.017c-.672 0-1.348.133-2.01.394-2.501.987-3.89 3.846-3.097 6.377a13 13 0 0 1-.567.547q-1.056.948-2.114 1.895a1107 1107 0 0 0-3.994 3.59c-.823.745-1.134 1.72-.897 2.818.252 1.167.995 1.949 2.15 2.26q.442.12.859.119c.82 0 1.562-.344 2.177-1.017 1.214-1.33 2.444-2.687 3.633-4l2.099-2.314c.07-.077.172-.186.285-.271a5.4 5.4 0 0 0 2.142.175c2.21-.24 4.12-1.988 4.544-4.154.105-.54-.035-1.025-.386-1.329m-8.287 1.14c-.28-.9-.142-1.907.382-2.763.537-.88 1.4-1.482 2.37-1.655q.368-.065.716-.066.724 0 1.378.288c-.424.15-.86.302-1.285.46-.269.1-.584.227-.876.408-.763.471-1.098 1.204-.943 2.063.086.477.248.96.469 1.4.53 1.053 1.525 1.438 2.73 1.053.54-.172 1.08-.364 1.601-.55l.147-.053a3.5 3.5 0 0 1-1.54 1.621 3.5 3.5 0 0 1-2.723.268 1.54 1.54 0 0 0-1.482.267 6 6 0 0 0-.69.657 3102 3102 0 0 0-3.485 3.841l-2.107 2.325c-.388.428-.83.554-1.353.385-.52-.167-.804-.522-.866-1.082-.044-.403.09-.738.412-1.026l1.653-1.482c1.456-1.306 2.962-2.655 4.442-3.985a9 9 0 0 0 .666-.645c.457-.5.587-1.081.384-1.729"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgTool);
export default ForwardRef;
