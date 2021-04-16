// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector45Icon(props: Vector45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 9"}
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
          "M13.069 8.59H6.722c-.55-.498-1.084-1.51-1.737-2.83-.379-.754-1.204-1.182-2.064-1.405v4.252H1.614L.392 4.097C-.416 2.59.186 1.2.754 0c.653 0 2.58.48 5.95 4.338 1.119 1.268 2.34 1.714 3.544 1.68.017.017.034.017.052.034 1.926.874 2.562 1.954 2.769 2.537z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector45Icon;
/* prettier-ignore-end */
