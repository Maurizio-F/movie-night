import { useEffect, useState } from "react";

const useFetch = <T>(url: string): T | null => {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);
  return data;
};

export default useFetch;
