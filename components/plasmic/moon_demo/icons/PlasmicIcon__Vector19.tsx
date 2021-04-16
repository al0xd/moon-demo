// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 28"}
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
          "M16.116 0C7.206 0 0 7.2 0 16.064c0 4.39 1.772 8.367 4.627 11.281l11.49-11.28 15.066 5.726a15.89 15.89 0 001.05-5.727C32.25 7.201 25.026 0 16.116 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
