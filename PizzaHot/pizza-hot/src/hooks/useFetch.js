import { useCallback, useEffect, useState } from "react";

//=> Lesson 9.17 is important watch again.
export default function useFetch(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //-> useCallback also runs like useEffect it also has dependencies.
  const SendRequest = useCallback(
    async function SendRequest(data) {
      setIsLoading(true);

      try {
        //-> {...config, body:data} here we write this becouse of get and post method post has body but get does not.
        const response = await fetch(url, { ...config, body: data });
        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || "useHook.js - Unkmown Error!!!");
        }

        setData(resData);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [url, config],
  );

  useEffect(() => {
    if (config && config.method === "GET") {
      SendRequest();
    }
  }, [SendRequest, config]);

  return {
    data,
    isLoading,
    error,
    SendRequest,
  };
}
