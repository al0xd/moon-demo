// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 412 220"}
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
          "M365.394 68.833C348.487 54.45 328.105-32.25 258.274 12.908c-36.085 23.334-96.938-20.024-147.282-5.04-46.25 13.75-50.705 59.08-46.233 73.84 9.047 29.832-19.092 34.273-45.184 47.079-40.936 20.111-10.836 90.746 27.83 91.089 38.664.343 272.926-.669 272.926-.669s56.174.137 79.532-30.757c25.146-33.26 9.202-82.482-34.469-119.617z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
