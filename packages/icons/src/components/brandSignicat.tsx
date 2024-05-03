import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";

function SvgBrandSignicat({ ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
      <g fill="currentColor" data-color="main">
        <path d="M9.224 12.496c-.3 0-.532-.21-.532-.563 0-.39.234-.622.532-.622.304 0 .533.25.533.594-.002.346-.234.591-.533.591m7.173.026c-.292 0-.55-.229-.55-.59 0-.363.256-.606.55-.606.273 0 .555.229.555.605-.005.376-.285.591-.555.591" />
        <path
          fillRule="evenodd"
          d="M11.998 9.291V7.37H21v9h-9v-1.922A4.87 4.87 0 1 1 7.868 7c1.743 0 3.27.915 4.13 2.291m-5.81 3.598c.59 0 .984-.348.984-.819 0-.448-.3-.688-.864-.8-.335-.064-.672-.175-.672-.448 0-.179.165-.332.462-.332s.56.14.56.354a.4.4 0 0 1-.022.118l-.005.016.402.139a.6.6 0 0 0 .077-.292c0-.443-.407-.747-.97-.747-.56 0-.926.349-.926.742 0 .501.37.738.948.833.43.077.563.223.563.43 0 .223-.2.39-.532.39-.308 0-.59-.135-.59-.408q0-.067.021-.148l-.402-.165a.66.66 0 0 0-.077.301c.004.505.399.836 1.043.836m1.303-2.425c0 .148.112.26.26.26a.26.26 0 0 0 .264-.26.26.26 0 0 0-.264-.264.26.26 0 0 0-.26.264m.466.536H7.55v1.848h.407zm1.781.248c-.115-.176-.292-.287-.586-.287-.487 0-.877.384-.877.97 0 .564.37.917.836.917.313 0 .527-.134.622-.331v.197c0 .349-.134.595-.488.595-.256 0-.448-.13-.507-.38l-.37.156c.133.407.448.577.877.577.586 0 .895-.402.895-.967v-1.7h-.402zm1.673.061c-.24 0-.438.18-.438.507l-.007-.003v1.034h-.407v-1.848h.407v.27a.65.65 0 0 1 .582-.308c.376 0 .65.245.65.68v1.209h-.408v-1.07c0-.306-.15-.47-.38-.47m2.324.602c0-.407.292-.6.546-.6.273 0 .47.17.507.443l.37-.115c-.077-.43-.429-.68-.877-.68a.924.924 0 0 0-.934.953c0 .586.39.976.992.976.449 0 .82-.256.918-.742l-.371-.134c-.042.273-.198.527-.564.527a.605.605 0 0 1-.587-.628m3.2-.615v-.3h.412v1.852h-.39v-.312a.72.72 0 0 1-.644.348c-.505 0-.873-.407-.873-.953 0-.568.36-.975.873-.975.295 0 .515.13.622.34m1.7 1.59c.349 0 .586-.215.622-.586l-.39-.077c-.014.215-.1.313-.256.313-.115 0-.234-.078-.234-.256v-.931h.703v-.354h-.703v-.59h-.405v.59H17.6v.349h.371v.915c-.003.371.211.627.663.627m-5.816-2.162a.254.254 0 0 1-.26-.26.26.26 0 0 1 .26-.264c.15 0 .265.117.265.264s-.117.26-.265.26m-.2.276h.406v1.848h-.407z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
const ForwardRef = forwardRef(SvgBrandSignicat);
export default ForwardRef;