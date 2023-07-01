import { useContext } from "react";
import AuthContext from "../context/Auth";

import { Props } from "../interfaces/AuthInterface";

const useAuth = () => {
  const { auth, verifyAuth, userInfo } = useContext(AuthContext) as Props;
  return { auth, verifyAuth, userInfo };
};

export default useAuth;
