// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 39"}
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
        d={
          "M0 19.013C0 8.521 8.531 0 19.075 0 29.6 0 38.149 8.504 38.149 19.013c0 10.492-8.53 19.013-19.074 19.013C8.548 38.026 0 29.523 0 19.013z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
