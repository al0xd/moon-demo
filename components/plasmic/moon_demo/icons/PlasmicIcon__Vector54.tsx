// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector54Icon(props: Vector54IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 48"}
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
          "M18.232 41.472v-5.675h8.978c.24 0 .447-.205.447-.445v-.909a.455.455 0 00-.447-.446h-8.978V1.646A1.65 1.65 0 0016.58 0h-1.772c-.912 0-1.651.737-1.651 1.646v32.351H4.18a.455.455 0 00-.448.446v.909c0 .24.207.446.448.446h8.978v5.674C6.656 41.97 1.462 44.284 0 47.302h31.39c-1.462-3.018-6.674-5.35-13.158-5.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector54Icon;
/* prettier-ignore-end */
