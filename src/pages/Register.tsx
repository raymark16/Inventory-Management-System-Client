import FormComponent from "../components/FormComponent";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URLi } from "../App";
import { Link } from "react-router-dom";
import { CustomForm } from "../interfaces/FormInterface";

const Register = () => {
  const [userPicture, setUserPicture] = useState<File | undefined>(undefined);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    if (
      userPicture === undefined ||
      !target.username?.value ||
      !target.email.value ||
      !target.password.value ||
      !target.phone?.value
    )
      return toast.error("All fields are required");

    const containsWhitespace = (str: string) => {
      return /\s/.test(str);
    };
    if (
      containsWhitespace(target.username.value) ||
      containsWhitespace(target.email.value) ||
      containsWhitespace(target.password.value) ||
      containsWhitespace(target.phone.value)
    )
      return toast.error("All fields should not have any spaces");
    try {
      const formData = new FormData();
      formData.append("username", target.username.value);
      formData.append("email", target.email.value);
      formData.append("password", target.password.value);
      formData.append("phone", target.phone.value);
      if (userPicture) formData.append("profilePicture", userPicture);
      await axios.post(`${URLi}/auth/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Registration Success");
      navigate("/login");
    } catch (err) {
      toast.error("Registration failed");
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
          height: "70vh",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "25px",
        }}
      >
        <h1 className="text-center">Register</h1>
        <div>
          <FormComponent
            setUserPicture={setUserPicture}
            handleSubmit={handleSubmit}
            buttonName="Register"
            usernameIncluded={true}
            emailIncluded={true}
            passwordIncluded={true}
            phoneIncluded={true}
            fileIncluded={true}
          />
        </div>
        <Link to="/login">Login now</Link>
      </div>
    </div>
  );
};

export default Register;
