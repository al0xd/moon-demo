// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle58Icon(props: Rectangle58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1439 491"}
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
          "M0 65.09s135-60.135 391-15c256 45.133 532.5-20.528 732.5-43.5 200-22.974 315.5 21.5 315.5 21.5v462.5H0V65.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle58Icon;
/* prettier-ignore-end */
