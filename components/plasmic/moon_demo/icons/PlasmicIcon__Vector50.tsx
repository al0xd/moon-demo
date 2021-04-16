// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector50Icon(props: Vector50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 56"}
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
          "M15.617 52.05s-1.22 4.39-5.418 3.824C5.987 55.308 0 52.804 0 52.804s1.806-5.657 4.042-13.115c2.7-9.018 6.054-20.624 7.637-27.945.447-2.057.74-3.772.86-4.99L16.099 0s5.126 11.658 5.418 14.59c.275 2.914-5.9 37.46-5.9 37.46z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector50Icon;
/* prettier-ignore-end */
