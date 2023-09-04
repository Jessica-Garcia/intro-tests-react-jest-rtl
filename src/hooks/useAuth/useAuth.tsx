import { useState } from "react";
// import { api } from "../../lib/axios";

type UserProps = {
  name: string;
  permissions: string[];
  isAdmin: boolean;
  token: string;
};

type LoginParamsProps = {
  login: string;
  password: string;
};

export const useAuth = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;
  // const isAuthenticated = user && user.isAuthenticated

  const login = ({ login, password }: LoginParamsProps) => {
    /*  try {
        api.post('/...', {login, password})
    } catch (error) {
        ...
    } */
    const response = {
      name: "Joe",
      permissions: ["all"],
      isAdmin: true,
      token: "kjsdkjajhsd",
    };

    setUser(response);
  };

  const logout = () => {
    // remover cookies
    // remove os dados do localStorage
    setUser(null);
    // redirect
  };
  return {
    user,
    login,
    isAuthenticated,
    logout,
  };
};
