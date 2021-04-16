// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector43Icon(props: Vector43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 4"}
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
          "M5.232 3.857H.09C-.186 2.537.262.07.262.07 3.065 2.743 4.819 0 4.819 0c.465 1.149.413 3.857.413 3.857z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector43Icon;
/* prettier-ignore-end */
