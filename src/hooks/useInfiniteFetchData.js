import { useState, useMemo, useCallback } from "react";

const useInfiniteFetchData = ({ fetchFunction }) => {
  const [data, setData] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [queryParams, setQueryParams] = useState({
    search: "",
    sortByPermission: "ASC",
    page: 0
  });

  const fetchFunctionCallbak = useCallback((q) => fetchFunction(q), [
    fetchFunction
  ]);

  // React.useEffect(() => {
  //   console.log("FETCHING: ");
  //   const fetchFn = async () => {
  //     const newData = await fetchFunctionCallbak(queryParams);
  //     setData((data) => [...data, ...newData]);
  //   };
  //   fetchFn();
  //   // fetchFunction(queryParams).then((newData) => {
  //   //   updateData(newData);
  //   //   console.log({ data });
  //   // });
  // }, [queryParams, fetchFunctionCallbak]);

  const loadMore = () => {
    console.log("LOAD MORE:", { hasMorePages });
    if (hasMorePages === true) {
      setQueryParams({ ...queryParams, page: queryParams.page + 1 });

      const fetchFn = async () => {
        const newData = await fetchFunctionCallbak(queryParams);
        setData((data) => [...data, ...newData.users]);
        setHasMorePages(newData.hasMorePages);
      };
      fetchFn();
    }
  };

  const updateQueryParams = (newQueryParams) => {
    console.log("UPDATE QP");

    setData([]);
    setQueryParams({ ...queryParams, ...newQueryParams, page: 0 });

    const fetchFn = async () => {
      const newData = await fetchFunctionCallbak(queryParams);
      setData([newData.users]);
      setHasMorePages(newData.hasMorePages);
    };
    fetchFn();
  };

  return { data, loadMore, updateQueryParams, hasMorePages };
};

export default useInfiniteFetchData;
