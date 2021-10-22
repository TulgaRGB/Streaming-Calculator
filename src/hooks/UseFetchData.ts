import { useEffect, useState } from "react";

interface Data {
  conversion_rates: {
    USD: number;
    GBP: number;
    EUR: number;
  };
}
export function UseFetchData(endpoint: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        setLoading(true);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [endpoint]);

  return { loading, error, data };
}
