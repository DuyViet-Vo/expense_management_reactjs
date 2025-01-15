import React from "react";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (credentials) => {
    const data = await login(credentials);
    // Xử lý logic sau khi đăng nhập thành công
    localStorage.setItem("token", data.token);
    alert("Đăng nhập thành công!"); 
    navigate("/dashboard");
  };

  return <LoginForm onSubmit={handleLogin} />;
}

export default LoginPage;
