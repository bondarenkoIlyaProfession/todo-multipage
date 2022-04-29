import { useEffect } from "react";

export const useDisableBodyScroll = (isActive) => {
  useEffect(() => {
    if (isActive) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isActive]);
};
