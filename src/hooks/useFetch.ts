import { useEffect, useState } from "react";

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

type FetchErrorMessage = {
  message: string;
};

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchErrorMessage | null>(null);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((result: T) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
