import { axios } from "./base";

export const getUsers = async () => {
  const response = await axios({ method: "get", url: "/api/users" });
  return response;
};

export const saveTask = async (data) => {
  const response = await axios({ method: "post", url: "/api/tasks", data });
  return response;
};

export const getTask = async (userID) => {
  const response = await axios({
    method: "get",
    url: `/api/users/${userID}/tasks`,
  });
  return response;
};
