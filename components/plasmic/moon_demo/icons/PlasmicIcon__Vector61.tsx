// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector61Icon(props: Vector61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 54"}
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
          "M25.316 25.567c-.705 9.446.482 23.796-.326 26.282-.688 2.143-8.807.874-11.937.154-1.153-.257-2.563-.651-4.025-1.097C4.968 49.654.566 47.87.084 46.55l-.051-.154a1.182 1.182 0 010-.549c.154-.668.774-1.406.842-3.086.086-1.868.07-4.063.138-6.429 0-.274 0-.548.034-.823v-.257c.07-2.64.207-5.418.362-8.16.103-1.732.223-3.43.36-5.075.362-4.235.826-7.99 1.463-10.373C4.264 7.77 6.534 5.232 8.598 3.381l1.496-1.286c1.669.36 3.647.12 5.418-.72C17.44.467 18.11-.202 18.454.056c4.489 3.446 7.705 13.955 6.862 25.51z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector61Icon;
/* prettier-ignore-end */
