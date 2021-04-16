// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 97 51"}
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

      <path d={"M96.267 0H0v50.062h96.267V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
