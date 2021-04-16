// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector68IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector68Icon(props: Vector68IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 11"}
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
        d={"M0 5.5h19m0 0L14.428 10M19 5.5L14.428 1"}
        stroke={"currentColor"}
        strokeWidth={"1.4"}
      ></path>
    </svg>
  );
}

export default Vector68Icon;
/* prettier-ignore-end */
