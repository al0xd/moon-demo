// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector70IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector70Icon(props: Vector70IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 70"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.99 22.441h9.439M9.669 9.816h-1.6C4.717 9.816 2 12.576 2 15.978v29.147c0 3.409 2.713 6.174 6.058 6.174h51.884c3.345 0 6.058-2.765 6.058-6.174V15.978c0-3.403-2.716-6.162-6.07-6.162h-2.483M2 42.882h57.511M26.48 54.907v1.235a6.249 6.249 0 01-2.82 5.24l-4.86 3.156a.626.626 0 00-.283.53v3.065h29.788v-3.066a.625.625 0 00-.286-.529l-4.852-3.15a6.265 6.265 0 01-2.828-5.255v-1.226m-21.527 9.62h15.041m-.884-42.086h.884m3.54 0h.884m3.54 0h.884m3.54 0h.884M50.593 2h-32.89c-1.832 0-3.316 1.512-3.316 3.379v21.797c0 1.867 1.484 3.379 3.315 3.379h5.828v7.53c0 .108.124.162.2.09l8.037-7.617H50.59c1.831 0 3.315-1.512 3.315-3.38v-21.8C53.908 3.513 52.425 2 50.593 2zm-19.69 12.505V7.49c0-.397.419-.643.758-.448l6.032 3.508a.522.522 0 010 .896l-6.032 3.508a.507.507 0 01-.758-.448z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector70Icon;
/* prettier-ignore-end */
