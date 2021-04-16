// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1Icon(props: Rectangle1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1438 455"}
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
        opacity={".8"}
        d={
          "M0 58.392s206-52.497 447.5-12.5 518 2.647 668.5-32.5c150.5-35.146 322 9.998 322 9.998v430.999H0V58.392z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1Icon;
/* prettier-ignore-end */
