import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api/posts"

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);

      try {
        const response = await api.get(url, {
          cancelToken: source.token,
        });

        if (isMounted) {
          const {data } = response.data;
          setData(data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
