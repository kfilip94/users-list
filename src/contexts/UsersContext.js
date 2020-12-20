import React, { useState, useMemo, useCallback, createContext } from "react";
import { SORT_TYPE } from "../utils";
import { fakeFetchUsers } from "../api/fakeApi";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [queryParams, setQueryParams] = useState({
    search: "",
    sortByPermission: SORT_TYPE.ASC,
    page: 0
  });

  const loadMore = () => {
    // console.log("LOAD MORE:", { hasMorePages });
    if (hasMorePages === true) {
      setQueryParams({ ...queryParams, page: queryParams.page + 1 });

      const fetchFn = async () => {
        const newData = await fakeFetchUsers(queryParams);
        setData((data) => [...data, ...newData.users]);
        setHasMorePages(newData.hasMorePages);
      };
      fetchFn();
    }
  };

  const updateQueryParams = (newQueryParams) => {
    setData([]);
    // console.log("UPDATE QP newQueryParams", newQueryParams, { queryParams });

    setQueryParams({ ...queryParams, ...newQueryParams, page: 0 });
    // console.log("UPDATE QP", queryParams);

    const fetchFn = async () => {
      const newData = await fakeFetchUsers({
        ...queryParams,
        ...newQueryParams,
        page: 0
      });
      setData(newData.users);
      setHasMorePages(newData.hasMorePages);
    };
    fetchFn();
  };

  const value = {
    data,
    loadMore,
    updateQueryParams,
    hasMorePages,
    queryParams
  };

  return (
    <UsersContext.Provider
      value={{
        data,
        loadMore,
        updateQueryParams,
        hasMorePages,
        queryParams
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
