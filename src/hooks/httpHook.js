import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAborCtrl = new AbortController();
      activeHttpRequests.current.push(httpAborCtrl);
      try {
        console.log(body);
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAborCtrl.signal,
        });
        const responseData = await response.json();
        console.log(responseData);

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAborCtrl,
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setIsLoading(false);
        throw err;
      }
    },
    [],
  );

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);
  return { isLoading, sendRequest };
};