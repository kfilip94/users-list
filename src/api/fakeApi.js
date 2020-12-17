const URL =
  "https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json";

export const fetchUsers = () => {
  return fetch(URL).then(async (response) => {
    const { users } = await response.json();
    if (response.ok) {
      if (users) {
        return users;
      } else {
        return Promise.reject(new Error("No users here"));
      }
    } else {
      const error = {
        message: "Something went wrong with the response, try again later"
      };
      return Promise.reject(error);
    }
  });
};
