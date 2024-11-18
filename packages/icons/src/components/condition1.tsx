import type { Ref } from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgCondition1({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m21.193 11.293-8.486-8.485a1 1 0 0 0-1.414 0l-8.485 8.485a1 1 0 0 0 0 1.414l8.485 8.485a1 1 0 0 0 1.414 0l8.486-8.485a1 1 0 0 0 0-1.414M12 19.071 4.93 12 12 4.929 19.071 12zm-.853-6.024c0-.933.224-1.223.647-1.5.36-.236.636-.432.636-.749a.48.48 0 0 0-.512-.477.554.554 0 0 0-.567.556H9.9c.011-1.249.928-1.771 2.032-1.771 1.212 0 2.111.534 2.111 1.6a1.57 1.57 0 0 1-.931 1.419.98.98 0 0 0-.624.919v.137h-1.341zm-.1 1.736a.79.79 0 0 1 .8-.783.788.788 0 1 1 0 1.578.79.79 0 0 1-.803-.795z"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCondition1);
export default ForwardRef;
