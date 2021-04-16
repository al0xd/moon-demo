// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 78 26"}
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
          "M0 .166S14.242-1.6 22.945 6.389c8.703 7.99 24.905.703 31.424 0 11.352-1.234 20.244 2.47 22.876 6.532v12.207H0V.166z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
