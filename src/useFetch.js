import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    console.log("use effect ran");
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
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

          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 2000);
    return () => abortCont.abort;
  }, [url]);
  return { data, isLoading, error };
};
export default useFetch;
