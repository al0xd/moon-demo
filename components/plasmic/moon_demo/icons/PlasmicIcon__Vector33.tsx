// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector33Icon(props: Vector33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
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
          "M7.93 8.264c.034.017-2.7 1.423-4.765.874C1.24 8.606-.034 6.103.001 6.103.826 5.95 1.05 4.818 1.033 0l.378.069 6.226 1.234S7.5 3.257 7.5 5.092c-.017 1.543.069 3 .43 3.172z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector33Icon;
/* prettier-ignore-end */
