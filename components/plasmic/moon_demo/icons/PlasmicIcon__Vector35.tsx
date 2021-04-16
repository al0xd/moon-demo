// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector35Icon(props: Vector35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 6"}
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
          "M6.226 1.234S6.09 3.19 6.09 5.024C2.597 4.92.757 1.748 0 0l6.226 1.234z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector35Icon;
/* prettier-ignore-end */
