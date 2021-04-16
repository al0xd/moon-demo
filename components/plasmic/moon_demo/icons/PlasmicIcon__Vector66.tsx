// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector66Icon(props: Vector66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 414 1"}
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
          "M413.535.789H.395A.4.4 0 010 .394.4.4 0 01.396 0h413.139a.4.4 0 01.396.394c.017.206-.172.395-.396.395z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector66Icon;
/* prettier-ignore-end */
