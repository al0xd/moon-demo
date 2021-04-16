// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector38Icon(props: Vector38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 42"}
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
          "M25.765 25.837c-.051 9.48 1.393 13.544 1.393 13.544s-8.565 4.337-18.73 1.148C8.308 40.495 0 38.61 0 38.61c.172-.377 1.686-6.772 1.858-7.132 2.15-4.595 3.784-6.618 4.024-8.024.465-2.64.482-5.366.241-7.937-.62-6.824-2.46-12.481-2.46-12.481C6.434 2.4 9.1 1.337 11.989.257c.671.823 2.615 1.663 4.386 1.612 2.03-.052 2.666-.892 2.58-1.869a62.44 62.44 0 013.87 2.332c1.84 3.171 5.556 6.257 5.83 11.143.07 1.2-2.889 12.104-2.889 12.362z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector38Icon;
/* prettier-ignore-end */
