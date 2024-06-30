import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import BG from "../../assets/icons/bg.png";
import { useState } from "react";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await apiRequest.post(`/auth/login`, {
        username,
        password,
      });
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (e) {
      setError(e.response.data.message);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={BG} alt="" />
      </div>
    </div>
  );
}

export default Login;
