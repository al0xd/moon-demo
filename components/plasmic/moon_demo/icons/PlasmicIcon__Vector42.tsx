// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector42Icon(props: Vector42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
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
          "M.482 0s.275 1.869-.43 3.875c0 0-.55 2.503 1.926 2.554 2.477.052 3.08-.188 2.804-1.731-.275-1.543-.808-4.2-.808-4.2L.482 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector42Icon;
/* prettier-ignore-end */
