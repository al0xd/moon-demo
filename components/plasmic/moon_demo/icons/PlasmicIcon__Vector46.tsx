// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector46Icon(props: Vector46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 55"}
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
          "M34.468 6.035s-5.418 3.017-7.344 3.892c-.688.308-1.926.891-3.2 1.474-.773.36-1.547.72-2.218 1.046a2.8 2.8 0 01-3.302-.703C15.48 8.332 7.894.943.052.017L.017 0v.017H0l.052.086C.499 1.2 4.782 11.88 4.919 14.144c.138 2.383.568 38.884.568 38.884s-.275 1.68 2.94.977c3.235-.703 4.077-1.406 4.077-1.406s-3.079-22.51-2.253-30.345c.172-1.544.017-3.258-.327-5.041 4.765 2.88 10.389 4.166 10.389 4.166s2.098-.909 5.35-2.932c1.375-.84 2.957-2.194 4.523-3.617 1.892-1.732 5.142-5.898 5.142-5.898l-.86-2.897z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector46Icon;
/* prettier-ignore-end */
