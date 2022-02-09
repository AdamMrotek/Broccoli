import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("use effect ran");
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("We cound find any matches");
          }
          return res.json();
        })
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
        });
    }, 2000);
  }, []);
  return { data, isLoading, error };
};
export default useFetch;
