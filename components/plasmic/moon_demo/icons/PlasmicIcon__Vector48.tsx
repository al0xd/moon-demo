// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector48Icon(props: Vector48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 61"}
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
          "M15.303 32.712c.052 6.532-.275 21.533-1.135 27.756h-3.164c-1.755 0-2.615-.017-2.615-.017-2.133-10.8-3.663-19.733-4.764-27.448-.912-6.326-1.72-11.744-2.34-16.407C.667 11.898.22 7.972.066 4.646L.012 3.12a20.097 20.097 0 010-1.44L17.28 0c-.24 11.435-2.012 28.923-1.977 32.712z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector48Icon;
/* prettier-ignore-end */
