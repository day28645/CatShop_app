import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7092/api/Logins/LoginUser",
        { username, password }
      );
      //console.log(response);
      if (response.status === 200) {
        if (response.data.isSuceess === true) {
          localStorage.setItem("token", response.data.token);
          alert(response.data.message);
          navigate("/listproduct");
          //navigate("/addproduct");
        }
      } else {
        alert("Password or Username is Incorrect");
        console.log("Password is Incorrect");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{ background: 'url("./src/images/background-img.png")' }}
    >
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6 my-5">
            <h2 className="display-3 fw-normal text-center">
              ...<span className="text-primary">Login</span>...
            </h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your Username"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark btn-lg rounded-1"
                onClick={() => {
                  onSubmit();
                }}
              >
                Login it now
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="mb-0 fw-normal">
                Don't have an account?{" "}
                <a href="/register" className="fw-bold text-primary">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
