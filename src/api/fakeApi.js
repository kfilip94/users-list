import data from "./users.json";
import { SORT_TYPE } from "../utils";

// const URL =
//   "https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json";

// export const fetchUsers = () => {
//   return fetch(URL).then(async (response) => {
//     const { users } = await response.json();
//     if (response.ok) {
//       if (users) {
//         return users;
//       } else {
//         return Promise.reject(new Error("No users here"));
//       }
//     } else {
//       const error = {
//         message: "Something went wrong with the response, try again later"
//       };
//       return Promise.reject(error);
//     }
//   });
// };

const getUsersByPage = (users, page) => {
  const startIndex = 100 * page;
  const endIndex = 100 * (page + 1) - 1;

  // console.log("FAKE_API: ", { startIndex, endIndex });
  if (users.length >= startIndex) {
    if (users.length >= endIndex) {
      return users.slice(startIndex, endIndex);
    } else {
      return users.slice(startIndex);
    }
  }
  return [];
};

const filterUsersBySearch = (users, search) => {
  if (search === "") return users;
  const lcSearch = search.toLowerCase();
  return users.filter(({ name, email }) => {
    return (
      name.toLowerCase().includes(lcSearch) ||
      email.toLowerCase().includes(lcSearch)
    );
  });
};

const sortUsersByRole = (users, sortByPermission) => {
  if (sortByPermission === SORT_TYPE.DESC) {
    return users.sort((a, b) => {
      if (a.role < b.role) return 1;
      else if (a.role === b.role) return 0;
      else return -1;
    });
  } else {
    return users.sort((a, b) => {
      if (a.role < b.role) return -1;
      else if (a.role === b.role) return 0;
      else return 1;
    });
  }
};

export const fakeFetchUsers = ({
  page = 0,
  search = "",
  sortByPermission = SORT_TYPE.ASC
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredUsers = filterUsersBySearch(data.users, search);
      const sortedUsers = sortUsersByRole(filteredUsers, sortByPermission);
      const _users = getUsersByPage(sortedUsers, page);
      const nextPage =
        Math.ceil(sortedUsers.length / 100) - 1 > page ? page + 1 : null;
      // console.log("FAKE_API: ", {
      //   query: {
      //     page,
      //     search,
      //     sortByPermission
      //   },
      //   response: { users: _users, nextPage }
      // });
      resolve({ users: _users, nextPage });
    }, 300);
  });
};
