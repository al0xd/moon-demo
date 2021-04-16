// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector57Icon(props: Vector57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 17"}
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
          "M3.912 0s5.195 3.326 4.696 4.406c-.069.137-2.941 5.263-2.941 5.263l-3.698 6.515s-1.565-.926-.826-3.017c.74-2.092 1.187-6.052-.705-8.624C-1.557 1.852 3.912 0 3.912 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector57Icon;
/* prettier-ignore-end */
