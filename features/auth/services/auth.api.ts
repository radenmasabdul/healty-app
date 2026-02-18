import { type LoginSchema } from "../schemas/login.schema";

const dummyUser = {
  id: "1",
  username: "admin",
  email: "admin@gmail.com",
  firstName: "Admin",
  lastName: "Pertama",
  image: "",
};

export const authApi = {
  login: async (payload: LoginSchema) => {
    if (
      payload.username === "admin" &&
      payload.password === "123456"
    ) {
      return dummyUser;
    }

    throw new Error("Invalid credentials");
  },

  logout: async () => {
    localStorage.removeItem("user");
  },
};
