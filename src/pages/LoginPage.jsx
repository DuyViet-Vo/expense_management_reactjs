import React from "react";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";

function LoginPage() {
  const handleLogin = async (credentials) => {
    const data = await login(credentials);
    // Xử lý logic sau khi đăng nhập thành công
    localStorage.setItem("token", data.token);
    alert("Đăng nhập thành công!"); 
  };

  return <LoginForm onSubmit={handleLogin} />;
}

export default LoginPage;
