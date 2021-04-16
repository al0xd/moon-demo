// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector32Icon(props: Vector32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 42"}
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
          "M30.633 1.051C29.463.383 28.07.314 27.09.383c.258-.257.74-.36.74-.36-.603-.086-1.961.514-1.961.514-8.428-3.24-9.753 9.12-9.564 12.001.172 2.88-2.838 3.806-7.206 6.07C.739 22.91 0 28.704 0 28.704c.069.035.138.086.206.138.413-.703 1.273-2.023 1.996-2.212-.035.068-.843 1.817-1.153 2.811 2.46 1.87 7.087 6.018 10.303 8.95-.017-.566 0-1.389.223-1.817l.396 2.383a370.766 370.766 0 012.907 2.691c-.207-2.314 10.526-14.572 16.133-18.241 1.359-2.006 1.858-5.538 1.892-5.812-.24 2.811-.722 4.372-1.152 5.263 4.73-4.372 1.96-20.059-1.118-21.808z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
