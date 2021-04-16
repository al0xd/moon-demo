// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle62Icon(props: Rectangle62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 82"}
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
          "M1440 0s-225 50.5-396.5 50.5c-193 0-522-35-669.5-35S0 50.5 0 50.5V82h1440V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle62Icon;
/* prettier-ignore-end */
