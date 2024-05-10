import type { Ref} from "react";
import { forwardRef } from "react";
import { type SvgComponentProps, generateIconCssVars } from "../types";

function SvgCogwheel(
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
        d="M19.43 12.98q.066-.488.07-.98a8 8 0 0 0-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.3 7.3 0 0 0-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.7 7.7 0 0 0-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.493.493 0 0 0 .12.64l2.11 1.65a8 8 0 0 0-.07.98q.004.492.07.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.517.4 1.085.73 1.69.98l.38 2.65A.49.49 0 0 0 10 22h4a.49.49 0 0 0 .49-.42l.38-2.65a7.7 7.7 0 0 0 1.69-.98l2.49 1q.088.03.18.03a.5.5 0 0 0 .43-.25l2-3.46a.5.5 0 0 0-.12-.64zm-.85 3.63-1.27-.51-1.04-.42-.9.68a5.8 5.8 0 0 1-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43a5.7 5.7 0 0 1-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68a5.8 5.8 0 0 1 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.438.184.851.423 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13q.05.364.05.73c0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        data-color="main"
      />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgCogwheel);
export default ForwardRef;
