// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector36Icon(props: Vector36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 13"}
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
          "M2.323 12.745S.5 9.865.053 7.413C-.257 5.665.637-.85 7.19.093c0 0 1.91.188 3.698 1.388 1.428.96 3.475 3.035 1.187 8.71l-.602 1.92-9.15.634z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector36Icon;
/* prettier-ignore-end */
