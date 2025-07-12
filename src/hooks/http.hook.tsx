import { useCallback, useState } from "react";

type Prosess = "waiting" | "loading" | "success" | "error";

const useHttp = () => {
  const [process, setProcess] = useState<Prosess>("waiting");

  const request = useCallback(
    async (url: string, method = "GET", body = null, headers = {}) => {
      setProcess("loading");
      try {
        const respnose = await fetch(url, { method, body, headers });

        if (!respnose.ok) {
          throw new Error("fetch Error");
        }

        const res = await respnose.json();

        return res;
      } catch (error) {
        setProcess("error");
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setProcess("waiting");
  }, []);

  return { setProcess, process, request, clearError };
};

export default useHttp;
