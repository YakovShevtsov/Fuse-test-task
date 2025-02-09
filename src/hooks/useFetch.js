import { useState } from "react";
import { debounce } from "../utils.js";

export default function useFetch(fetchFn, debounceDelay) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFetch = debounce(async (searchValue) => {
    setError(null);

    if (searchValue.length < 3) {
      setData([]);
      return;
    }

    setIsLoading(true);

    try {
      const fetchedData = await fetchFn(searchValue);
      setData([...fetchedData]);
    } catch (error) {
      setError({
        message: error.message || "An error occured!",
      });
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, debounceDelay);

  return {
    data, error, isLoading, debouncedFetch
  }
}
