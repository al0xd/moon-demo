// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle59Icon(props: Rectangle59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1180 489"}
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
        d={"M0 0h1180v489H50c-27.614 0-50-22.386-50-50V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle59Icon;
/* prettier-ignore-end */
