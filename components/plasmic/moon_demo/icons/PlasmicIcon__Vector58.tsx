// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector58Icon(props: Vector58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 49"}
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
          "M22.95 0S2.43 12.738.126 21.31C-2.162 29.884 27.44 48.142 27.44 48.142s3.251-2.864 3.819-4.955c0 0-13.382-15.979-16.288-19.562-1.79-2.195 26.35-7.612 29.79-12.944C48.2 5.349 46.96.874 46.96.874L22.951 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector58Icon;
/* prettier-ignore-end */
