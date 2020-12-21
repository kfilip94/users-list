import { useInfiniteQuery } from "react-query";
import { fakeFetchUsers } from "../api/fakeApi";

const useUsers = (queryParams) => {
  return useInfiniteQuery(
    ["users", queryParams],
    async (params) => {
      const { pageParam = 0 } = params;
      const response = await fakeFetchUsers({
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
