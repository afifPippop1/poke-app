"use client";

import { usePathname } from "next/navigation";
import { RefObject, useEffect } from "react";

export function useScrollRestoration(
  storageKey: string,
  ref: RefObject<HTMLElement |null> 
) {
  const pathname = usePathname();

  useEffect(() => {
    if (!ref?.current) return;
    const saved = sessionStorage.getItem(storageKey);
    if (saved) {
      ref.current.scrollTo(0, parseInt(saved, 10));
    }

    const save = () => {
      if (ref.current) {
        sessionStorage.setItem(storageKey, ref.current.scrollTop.toString());
      }
    };

    window.addEventListener("beforeunload", save);
    return () => {
      save();
      window.removeEventListener("beforeunload", save);
    };
  }, [pathname, ref, storageKey]);

  const onRouteChange = () => {
    if (!ref?.current) return;
    sessionStorage.setItem(storageKey, ref.current.scrollTop.toString());
  };
  return { onRouteChange };
}
