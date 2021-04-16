// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector52Icon(props: Vector52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 28"}
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
          "M11.403 8.984c-.189 4.749-1.307 13.99-11.317 18.927-.034.017-.052.034-.086.034C2.7 18.927 6.054 7.321 7.637 0c1.857 2.726 3.87 6.36 3.766 8.984z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector52Icon;
/* prettier-ignore-end */
