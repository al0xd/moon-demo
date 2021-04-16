// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector64Icon(props: Vector64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 14"}
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
          "M1.907 13.34s8.067.909 8.549-4.098C10.937 4.236 12.313.98 7.188.19 2.062-.599.875 1.22.308 2.847c-.585 1.63-.482 10.133 1.6 10.493z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector64Icon;
/* prettier-ignore-end */
