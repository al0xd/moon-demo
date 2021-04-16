// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UnionIcon(props: UnionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 503 62"}
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
        opacity={".6"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M503 0H0v34h69v28h365V34h69V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
