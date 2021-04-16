// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector49Icon(props: Vector49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 56"}
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
          "M10.94 55.822c-1.755 0-2.615-.017-2.615-.017-2.133-10.8-3.664-19.733-4.765-27.448-.91-6.327-1.72-11.744-2.339-16.407C.602 7.252.155 3.326 0 0l6.33 3.72S2.288 5.143 3.836 15.91c1.53 10.767 4.953 38.386 7.103 39.912z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector49Icon;
/* prettier-ignore-end */
