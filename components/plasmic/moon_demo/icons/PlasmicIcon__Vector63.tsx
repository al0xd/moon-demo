// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector63IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector63Icon(props: Vector63IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 8"}
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
          "M0 3.343s.086 1.389.55 3.79C4.214 5.948 5.882 2.64 6.433 1.251c.154-.395.223-.635.223-.635S6.52.583 6.261.531C5.745.43 4.78.223 3.732 0L0 3.343z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector63Icon;
/* prettier-ignore-end */
