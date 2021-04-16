// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector34Icon(props: Vector34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 2"}
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
        d={"M0 1.5s3.079-3.258 6.932-.172c0 0-2.236-.394-6.932.172z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */
