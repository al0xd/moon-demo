// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector31Icon(props: Vector31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 11"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 1.252l6.398 9.052L8.91 7.098 5.04 0 0 1.252z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
