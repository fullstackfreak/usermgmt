import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post("http://localhost:5000/auth/login", {
    //     email,
    //     password,
    //   });
    //   localStorage.setItem("token", res.data.token);
    //   navigate("/");
    // } catch (error) {
    //   alert("Login failed!");
    // }
    if (email === "admin@example.com" && password === "admin123") {
      alert("Login Successful");
      navigate("/admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
