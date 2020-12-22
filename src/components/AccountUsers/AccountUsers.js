import React from "react";
import AccountUsersComponent from "./AccountUsersComponent";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import ListSelectionContextProvider from "../../contexts/ListSelectionContextProvider";

const queryClient = new QueryClient();

const AccountUsers = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ListSelectionContextProvider>
        <AccountUsersComponent {...props} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </ListSelectionContextProvider>
    </QueryClientProvider>
  );
};

export default AccountUsers;
