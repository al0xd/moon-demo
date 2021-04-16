// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector28Icon(props: Vector28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
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
          "M17.401 34.71c9.61 0 17.401-7.77 17.401-17.355S27.012 0 17.401 0C7.791 0 0 7.77 0 17.355s7.79 17.356 17.401 17.356z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector28Icon;
/* prettier-ignore-end */
