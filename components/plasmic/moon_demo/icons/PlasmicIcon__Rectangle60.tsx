// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle60Icon(props: Rectangle60IconProps) {
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
        d={"M0 0h1180v489H40c-22.091 0-40-17.909-40-40V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle60Icon;
/* prettier-ignore-end */
