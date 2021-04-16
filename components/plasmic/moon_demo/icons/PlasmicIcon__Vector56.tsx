// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector56Icon(props: Vector56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 9"}
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
          "M15.153 1.987s-.379 6.138-1.583 6.223c-.154.018-6.054.018-6.054.018L0 8.176s.052-1.8 2.253-2.194c2.202-.378 5.882-1.92 7.207-4.818 1.41-3.035 5.693.823 5.693.823z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector56Icon;
/* prettier-ignore-end */
