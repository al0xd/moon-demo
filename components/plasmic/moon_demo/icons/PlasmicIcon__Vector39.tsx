// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector39Icon(props: Vector39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 27"}
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
          "M6.708 16.48C5.83 17.716 4.162 25.208 0 26.15c2.15-5.332 3.784-7.68 4.025-9.326.464-3.07.481-6.241.24-9.224C5.66 5.165 6.709 3.485 6.709 3.485c.103-.394 2.219-6.892 2.89-1.08.67 5.812-1.91 12.687-2.89 14.076z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector39Icon;
/* prettier-ignore-end */
