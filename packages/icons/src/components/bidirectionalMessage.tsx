import type { Ref } from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgBidirectionalMessage(
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
      <g clipPath="url(#clip0)">
        <path
          d="M18 3H6C4.93913 3 3.92172 3.42142 3.17157 4.17157C2.42142 4.92172 2 5.93913 2 7V15C2 16.0609 2.42142 17.0783 3.17157 17.8284C3.92172 18.5786 4.93913 19 6 19H9V21.586C9 21.7179 9.02609 21.8485 9.07678 21.9703C9.12747 22.0921 9.20176 22.2026 9.29536 22.2956C9.38897 22.3885 9.50003 22.4621 9.62217 22.5119C9.7443 22.5617 9.87509 22.5869 10.007 22.586C10.1375 22.586 10.2666 22.5599 10.3868 22.5092C10.507 22.4586 10.6159 22.3844 10.707 22.291L14 19H18C19.0609 19 20.0783 18.5786 20.8284 17.8284C21.5786 17.0783 22 16.0609 22 15V7C22 5.93913 21.5786 4.92172 20.8284 4.17157C20.0783 3.42142 19.0609 3 18 3ZM20 15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17H13.172L12.586 17.586L11 19.172V17H6C5.46957 17 4.96086 16.7893 4.58578 16.4142C4.21071 16.0391 4 15.5304 4 15V7C4 6.46957 4.21071 5.96086 4.58578 5.58578C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58578C19.7893 5.96086 20 6.46957 20 7V15Z"
          fill="currentColor"
        />
        <path d="M14 10V8H9V6L6 9L9 12V10H14Z" fill="currentColor" />
        <path d="M15 12H10V14H15V16L18 13L15 10V12Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBidirectionalMessage);
export default ForwardRef;
