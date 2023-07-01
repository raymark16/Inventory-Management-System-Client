import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { URLi } from "../App";

const HeaderComponent = () => {
  const { verifyAuth, auth, userInfo } = useAuth();
  const Logout = async () => {
    await axios.get(`${URLi}/auth/logout`);
    verifyAuth();
    toast.success("Logout successful");
  };
  return (
    <nav className="navbar navbar-dark bg-dark shadow pt-2 pb-2 ps-5 pe-5 mb-3">
      {auth && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <h1 className="text-white">
              Welcome, <span className="text-primary">{userInfo.username}</span>
            </h1>
          </div>
          <div>
            <button onClick={Logout} className="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
