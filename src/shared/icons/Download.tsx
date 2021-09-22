import { FC } from "react";

const Download: FC<{ width?: string | number; height?: string | number; fill?: string }> = ({
  width,
  height,
  fill = "white"
}) => (
  <svg height={height} width={width} fill={fill} enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
    <path d="m12 16c-.205 0-.401-.084-.542-.232l-5.25-5.5c-.455-.476-.117-1.268.542-1.268h2.75v-5.75c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25v5.75h2.75c.659 0 .997.792.542 1.268l-5.25 5.5c-.141.148-.337.232-.542.232z" />
    <path d="m22.25 22h-20.5c-.965 0-1.75-.785-1.75-1.75v-.5c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z" />
  </svg>
);

export default Download;
