import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URLi } from "../App";

import { Props, Children } from "../interfaces/AuthInterface";

const AuthContext = createContext<Props | null>(null);

export function AuthProvider({ children }: Children) {
  const [auth, setAuth] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});

  const verifyAuth = async () => {
    const res = await axios.get(`${URLi}/auth/is_logged_in`);
    setUserInfo(res.data.userInfo);
    setAuth(res.data.loggedIn);
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, verifyAuth, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
