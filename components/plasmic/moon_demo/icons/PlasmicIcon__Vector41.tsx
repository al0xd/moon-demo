// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector41Icon(props: Vector41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 9"}
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
          "M13.416 1.674C12.143.131 11.18.474 10.646.937 8.859-1.721 3.217 2.12 3.217 2.12 2.666 5.789 0 7.897 0 7.897s1.496.926 4.97.035c2.736-.703 4.713-4.56 5.419-6.19.498.43 1.53 1.44 1.84 2.418.413 1.303.602 3.995 1.376 3.892.017.017 1.72-4.08-.19-6.378z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector41Icon;
/* prettier-ignore-end */
