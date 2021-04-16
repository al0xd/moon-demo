// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector60Icon(props: Vector60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M3.13 10.492C1.118 11.744 0 13.322 0 13.322c4.92 1.268 13.072-3.275 13.072-3.275S9.907 7.92 8.738 3.275c-.052-.24-.12-.48-.155-.72A14.592 14.592 0 018.325 0L6.072 2.023l-3.75 3.36s.086 1.39.55 3.79c.052.394.155.84.258 1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector60Icon;
/* prettier-ignore-end */
