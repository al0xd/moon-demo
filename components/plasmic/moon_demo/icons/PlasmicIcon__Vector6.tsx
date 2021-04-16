// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 15"}
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
          "M18 2.857C18 1.831 17.154 1 16.111 1H2.89C1.846 1 1 1.831 1 2.857m17 0v9.286C18 13.168 17.154 14 16.111 14H2.89C1.846 14 1 13.168 1 12.143V2.857m17 0L9.5 8.428 1 2.858"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
