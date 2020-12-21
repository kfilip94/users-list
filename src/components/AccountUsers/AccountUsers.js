import React from "react";
import AccountUsersComponent from "./AccountUsersComponent";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import UserContextProvider from "../../contexts/UserContext";

const queryClient = new QueryClient();

const AccountUsers = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AccountUsersComponent {...props} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default AccountUsers;
