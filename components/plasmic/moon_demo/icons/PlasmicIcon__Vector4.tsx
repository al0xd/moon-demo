// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.71 3.396l-1.342-.669m0 0L1 5.403V17l5.368-2.676m0-11.597v11.597m0 0L11.737 17m0 0l5.368-2.676V12.54M11.737 17v-4.46m2.684-1.784l-3.131-4.46a3.558 3.558 0 011.356-4.826 3.588 3.588 0 014.858 1.286 3.562 3.562 0 01.049 3.54l-3.132 4.46zm.976-6.245a.975.975 0 01-.976.974.975.975 0 01-.976-.974c0-.537.437-.973.976-.973.54 0 .976.436.976.973z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
