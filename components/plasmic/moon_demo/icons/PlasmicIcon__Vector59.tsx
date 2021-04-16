// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector59Icon(props: Vector59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 12"}
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
          "M43.533 0H1.53C.688 0 0 .686 0 1.526v8.366c0 .84.688 1.526 1.53 1.526h42.003c.843 0 1.53-.686 1.53-1.526V1.526A1.52 1.52 0 0043.533 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector59Icon;
/* prettier-ignore-end */
