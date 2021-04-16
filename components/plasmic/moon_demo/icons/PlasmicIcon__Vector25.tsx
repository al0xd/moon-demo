// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
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
          "M17.361 34.79c9.588 0 17.361-7.788 17.361-17.395S26.95 0 17.362 0C7.771 0 0 7.788 0 17.395S7.773 34.79 17.361 34.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
