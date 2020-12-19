import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [selectedUsers, setSelectedUsers] = useState({});

  const selectUser = (userId) => {
    const _selectedUsers = { ...selectedUsers, [userId]: true };
    setSelectedUsers(_selectedUsers);
  };

  const deselectUser = (userId) => {
    const _selectedUsers = { ...selectedUsers, [userId]: false };
    setSelectedUsers(_selectedUsers);
  };

  // const isChecked = (userId) => {
  //   return selectedUsers.includes(userId);
  // };

  return (
    <UserContext.Provider value={{ selectUser, deselectUser, selectedUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
