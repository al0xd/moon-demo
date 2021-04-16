// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector47Icon(props: Vector47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 57"}
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
          "M28.878 56.868l-3.577.103s-8.256-9.155-12.883-23.848a22.988 22.988 0 00-.344-1.029c-2.528-7.372-7.791-16.613-10.56-24.98a99.885 99.885 0 01-1.187-3.77C.207 2.965.103 2.588 0 2.228L2.941 0s8.84 14.264 11.576 27.688c2.39 11.658 11.902 25.7 14.361 29.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector47Icon;
/* prettier-ignore-end */
