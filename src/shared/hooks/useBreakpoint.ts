import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const getDeviceConfig = (width: number): "sm" | "md" | "lg" => {
  if (width < 720) {
    return "sm";
  } else if (width < 1024) {
    return "md";
  } else {
    return "lg";
  }
};

export const useBreakpoint = (): "sm" | "md" | "lg" => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
