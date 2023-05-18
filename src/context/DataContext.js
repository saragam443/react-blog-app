import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "/api/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filterArray = posts.filter(
      (post) =>
        post.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchArray(filterArray.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchArray,
        fetchError,
        isLoading,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
