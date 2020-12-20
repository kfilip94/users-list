import React from "react";
import AccountUsersComponent from "./AccountUsersComponent";
import UsersContextProvider from "../../contexts/UsersContext";

const AccountUsers = (props) => {
  return (
    <UsersContextProvider>
      <AccountUsersComponent {...props} />
    </UsersContextProvider>
  );
};

export default AccountUsers;
