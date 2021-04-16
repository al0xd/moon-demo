// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M22.68 0H1.32A1.32 1.32 0 000 1.32v21.36A1.32 1.32 0 001.32 24h11.496v-9.3h-3.12v-3.6h3.12V8.4a4.368 4.368 0 014.656-4.8c.934-.006 1.867.042 2.796.144v3.24H18.36c-1.512 0-1.8.72-1.8 1.764v2.316h3.6l-.468 3.6H16.56V24h6.12A1.319 1.319 0 0024 22.68V1.32A1.319 1.319 0 0022.68 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
