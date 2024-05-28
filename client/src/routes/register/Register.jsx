import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BG from "../../assets/icons/bg.png";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

const apiURL = import.meta.env.VITE_BASE_URL;

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const response = await apiRequest.post(`/auth/register`, {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (e) {
      setError(e.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
          />
          <input name="email" type="text" placeholder="Email" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={3}
            maxLength={20}
          />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={BG} alt="" />
      </div>
    </div>
  );
}

export default Register;
