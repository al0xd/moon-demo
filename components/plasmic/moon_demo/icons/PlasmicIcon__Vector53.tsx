// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector53IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector53Icon(props: Vector53IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 30"}
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
          "M12.427 0S3.86.6 1.815 5.178C-.25 9.738-.903 24.945 1.729 29.42c0 0 3.612 1.028 9.975-.172.086-.017.155-.034.241-.051 0 0 2.03-4.972.207-5.95 0 0-5.384.275-4.816-1.49C7.886 19.99 12.426 0 12.426 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector53Icon;
/* prettier-ignore-end */
