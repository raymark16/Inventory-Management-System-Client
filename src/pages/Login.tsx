import FormComponent from "../components/FormComponent";
import axios from "axios";
import toast from "react-hot-toast";
import { URLi } from "../App";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { CustomForm } from "../interfaces/FormInterface";

const Login = () => {
  const { verifyAuth } = useAuth();
  const handleSubmit = async (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    if (!target.email.value || !target.password.value)
      return toast.error("All fields are required");

    try {
      await axios.post(`${URLi}/auth/login`, {
        email: target.email.value,
        password: target.password.value,
      });
      verifyAuth();
      toast.success("Login Success");
    } catch (err) {
      toast.error("Login failed");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "50vh",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "25px",
        }}
      >
        <h1 className="text-center">Login</h1>
        <div>
          <FormComponent
            handleSubmit={handleSubmit}
            buttonName="Login"
            emailIncluded={true}
            passwordIncluded={true}
          />
        </div>
        <Link to="/register">Don't have an account?</Link>
      </div>
    </div>
  );
};

export default Login;
