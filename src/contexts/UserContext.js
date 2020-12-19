import React, { createContext, useState, useMemo } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [selectedUsers, setSelectedUsers] = useState({ ALL_SELECTED: false });

  const selectUser = (userId) => {
    if (userId === "ALL_SELECTED") {
      setSelectedUsers({ ALL_SELECTED: true });
    } else {
      const _selectedUsers = { ...selectedUsers, [userId]: true };
      setSelectedUsers(_selectedUsers);
    }
  };

  const deselectUser = (userId) => {
    if (userId === "ALL_SELECTED") {
      setSelectedUsers({ ALL_SELECTED: false });
    } else {
      const _selectedUsers = {
        ...selectedUsers,
        [userId]: false
      };
      setSelectedUsers(_selectedUsers);
    }
  };

  const selectedUsersCount = useMemo(() => {
    return Object.values(selectedUsers).filter((value) => !!value).length;
  }, [selectedUsers]);

  return (
    <UserContext.Provider
      value={{ selectUser, deselectUser, selectedUsers, selectedUsersCount }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
