// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector51Icon(props: Vector51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 11"}
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
          "M15.101.185c-2.03.258-2.803 1.338-3.044 2.778-.138.788-.533 1.56-.877 2.091-2.012.103-6.828.36-10.853.618L0 10.952c3.32-.411 7.396-1.251 12.074-2.846.361-.068.809-.291 1.376-.737 2.907-2.366 4.558-6.344 4.558-6.91 0-.565-.877-.548-2.907-.274z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector51Icon;
/* prettier-ignore-end */
