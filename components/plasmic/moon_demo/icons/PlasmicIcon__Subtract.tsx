// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtractIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtractIcon(props: SubtractIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zM8.677 9.604a.97.97 0 01.67-.266h2.617a.3.3 0 01.279.18l1.079 2.58a.28.28 0 01-.124.353l-.539.309c-.741.425-1.083 1.374-.574 2.15a9.556 9.556 0 003.086 2.952c.813.487 1.805.16 2.25-.55l.323-.514a.307.307 0 01.37-.119l2.697 1.032a.287.287 0 01.189.266v2.502c0 .24-.1.47-.277.64a.968.968 0 01-.651.265c-3.033-.181-5.893-1.415-8.042-3.47-2.15-2.055-3.44-4.788-3.63-7.688a.886.886 0 01.277-.622zM9.347 8c-.622 0-1.22.236-1.66.657a2.195 2.195 0 00-.686 1.627c.206 3.235 1.642 6.285 4.04 8.577 2.396 2.29 5.587 3.664 8.97 3.861l.042.001c.622 0 1.22-.236 1.66-.657.44-.42.687-.992.687-1.587v-2.502c0-.664-.423-1.262-1.069-1.509l-2.698-1.032c-.775-.296-1.66-.01-2.089.673l-.323.515a.277.277 0 01-.161.122.18.18 0 01-.145-.018A8.186 8.186 0 0113.27 14.2a.16.16 0 01-.019-.138.268.268 0 01.127-.154l.54-.31c.715-.41 1.013-1.256.703-1.997l-1.08-2.58C13.285 8.406 12.66 8 11.965 8H9.347z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
