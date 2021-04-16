// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
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
          "M32.232 16.064C32.232 7.184 25.01 0 16.116 0 7.206 0 0 7.2 0 16.064 0 24.945 7.224 32.13 16.116 32.13c3.681 0 7.07-1.235 9.77-3.292l-9.77-12.773 15.067 5.727a15.76 15.76 0 001.05-5.727z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
