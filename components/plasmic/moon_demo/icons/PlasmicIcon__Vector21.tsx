// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
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
          "M17.378 34.756c9.598 0 17.378-7.78 17.378-17.378C34.756 7.78 26.976 0 17.378 0 7.78 0 0 7.78 0 17.378c0 9.598 7.78 17.378 17.378 17.378z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
