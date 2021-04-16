// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector55Icon(props: Vector55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 62"}
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
          "M37.014 15.301c-1.066 1.817-2.322 3.515-3.595 5.126-3.956 4.972-8.256 9.07-9.012 12.962a18.204 18.204 0 01-.688 2.485c-.31.892-.706 1.818-1.153 2.795-1.685 3.635-4.18 7.698-6.69 11.401a284.173 284.173 0 01-8.411 11.727L0 61.47c.292-.754 3.56-9.584 7.912-20.367 1.772-4.39 3.646-9.036 5.47-13.545.24-.6.481-1.2.722-1.783.55-1.371 1.1-2.726 1.634-4.046a17881.1 17881.1 0 007.344-18.207S39.44-2.65 41.125 1.346c1.427 3.308.275 6.532-4.11 13.955z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector55Icon;
/* prettier-ignore-end */
