import { useEffect, useState } from "react";

const useFetch = <T>(
  url: string
): {
  data: T | null;
  reFetch: () => void;
} => {
  const [data, setData] = useState<T | null>(null);

  const reFetch = async (): Promise<void> => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.log("Fetch don´t work");
    }
  };

  useEffect(() => {
    reFetch();
  }, [url]);

  return { data, reFetch };
};

export default useFetch;
