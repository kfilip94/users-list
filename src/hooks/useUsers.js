import { useInfiniteQuery } from "react-query";
import { fakeFetchUsers } from "../api/fakeApi";

const useUsers = (queryParams) => {
  return useInfiniteQuery(
    ["users", queryParams],
    (params) => {
      const { pageParam = 0 } = params;
      const response = fakeFetchUsers({
        page: pageParam,
        ...queryParams
      });
      return response;
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage ?? false;
      }
    }
  );
};

export default useUsers;
