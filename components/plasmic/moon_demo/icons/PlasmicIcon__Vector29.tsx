// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 30"}
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
          "M15.944 0C7.138 0 0 7.115 0 15.876c0 6.017 3.354 11.246 8.29 13.938 2.546-4.715 7.654-13.938 7.654-13.938l7.551 13.99c4.988-2.675 8.393-7.938 8.393-13.99C31.889 7.115 24.752 0 15.944 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
