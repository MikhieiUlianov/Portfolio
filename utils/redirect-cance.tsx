"use client";

import { useRouter } from "next/navigation";

let timeoutId: number | null = null;

export function useRedirectCancel() {
  const router = useRouter();

  const redirectWithDelay = (path?: string, delay = 5000) => {
    if (path) {
      timeoutId = window.setTimeout(() => {
        router.push(path);
        timeoutId = null;
      }, delay);
    }
  };

  const cancelRedirect = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return { redirectWithDelay, cancelRedirect };
}
