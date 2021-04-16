// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector40Icon(props: Vector40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 14"}
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
          "M8.345 13.868s-8.24.137-8.256-4.99C.089 3.754-.978.325 4.285.033c5.264-.308 6.296 1.646 6.708 3.36.413 1.698-.498 10.305-2.648 10.476z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector40Icon;
/* prettier-ignore-end */
