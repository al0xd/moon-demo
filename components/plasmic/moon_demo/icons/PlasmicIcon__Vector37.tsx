// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector37Icon(props: Vector37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 72"}
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
          "M35.363 71.2l-3.303.104-3.577.103S20.227 62.25 15.6 47.559a22.988 22.988 0 00-.344-1.029c-2.528-7.372-7.791-16.613-10.56-24.98a99.885 99.885 0 01-1.187-3.771c-.12-.377-.224-.755-.327-1.115C1.135 9.601.55 4.954 0 0l19.986.154c.017.017 3.251 33.86 15.377 71.047z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector37Icon;
/* prettier-ignore-end */
