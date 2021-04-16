// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector62Icon(props: Vector62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 23"}
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
          "M8.995 22.562C4.936 21.31.533 19.527.052 18.207L0 18.053v-.549c.155-.668.774-1.405.843-3.086.086-1.868.069-4.063.137-6.429 0-.274 0-.548.035-.823v-.257L16.323 0c.017 0 .894 12.293-7.328 22.562z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector62Icon;
/* prettier-ignore-end */
