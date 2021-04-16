// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector71Icon(props: Vector71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 64"}
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
          "M25.094 11.495H9.137c-2.405 0-4.352 1.994-4.352 4.451v31.75l58.317-.01v-31.74c0-2.46-1.95-4.45-4.352-4.45h-2.031m.08 3.213c1.4 0 2.53 1.157 2.53 2.587v25.355m-51.352 0V17.347c0-1.43 1.131-2.588 2.53-2.588h14.587M4.904 47.755L2 58.491m60.968-10.736l2.901 10.736M9.314 50.114l-.951 4.142a.453.453 0 00.432.561h50.001a.452.452 0 00.438-.534l-.72-4.166M14.94 43.245V26.204a.46.46 0 01.455-.466h8.37a.46.46 0 01.456.466v17.04m5.225 0V10.478a.46.46 0 01.456-.465h8.37a.46.46 0 01.456.465v32.768m5.225 0V2.465A.46.46 0 0144.408 2h8.37a.46.46 0 01.456.466v40.779M44.29 2.356l8.797 8.99m-8.797-.088l8.797 8.99m-8.797-.088l8.797 8.99m-8.797-.089l8.797 8.991m-8.797-.089l5.15 5.267m14.965 19.005H3.77c-.882 0-1.599-.73-1.599-1.635v-2.12c0-.057.044-.104.102-.104h63.643c.046 0 .084.038.084.086v2.136c.003.908-.714 1.638-1.596 1.638z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector71Icon;
/* prettier-ignore-end */
