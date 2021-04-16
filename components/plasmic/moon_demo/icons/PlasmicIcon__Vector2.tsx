// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
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
          "M22.225 0H1.775A1.76 1.76 0 00.53.493 1.74 1.74 0 000 1.716v20.568a1.73 1.73 0 00.53 1.223A1.75 1.75 0 001.775 24h20.45a1.76 1.76 0 001.245-.493 1.74 1.74 0 00.53-1.223V1.716a1.732 1.732 0 00-.53-1.223A1.752 1.752 0 0022.225 0zM7.28 20.088H3.658v-10.8H7.28v10.8zM5.469 7.776c-.5 0-.979-.197-1.332-.548a1.866 1.866 0 010-2.648 1.89 1.89 0 011.332-.548 1.906 1.906 0 011.476.467 1.885 1.885 0 01.633 1.405 1.874 1.874 0 01-.633 1.405 1.898 1.898 0 01-1.476.467zm14.873 12.312H16.72v-5.796c0-1.452-.519-2.4-1.835-2.4a2 2 0 00-1.136.364 1.981 1.981 0 00-.723.944c-.094.282-.135.58-.12.876v6H9.283v-10.8h3.621V10.8a3.612 3.612 0 011.385-1.352A3.64 3.64 0 0116.177 9c2.415 0 4.165 1.548 4.165 4.872v6.216z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
