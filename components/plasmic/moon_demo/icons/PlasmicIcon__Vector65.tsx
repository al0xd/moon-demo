// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector65Icon(props: Vector65IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 13"}
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
          "M10.79 12.807s-.517-6.652-7.844-7.338C-2.076 4.99.727.686 1.261 0c0 0 3.852.531 7.791 1.183 8.273 1.354 2.546 10.595 1.737 11.624z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector65Icon;
/* prettier-ignore-end */
