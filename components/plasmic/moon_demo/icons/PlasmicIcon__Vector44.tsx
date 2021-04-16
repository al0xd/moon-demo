// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector44Icon(props: Vector44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 9"}
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
          "M9.374 7.75S4.799 2.571 3.406 0L0 1.732l7.602 7.115 1.772-.24v-.858z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector44Icon;
/* prettier-ignore-end */
