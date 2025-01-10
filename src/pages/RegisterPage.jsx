import React from "react";
import RegisterForm from "../components/RegisterForm";
import { register } from "../services/authService";

function RegisterPage() {
  const handleRegister = async (userData) => {
    await register(userData);
    // Xử lý sau khi đăng ký thành công
    alert("Đăng ký thành công! Bạn có thể đăng nhập.");
  };

  return <RegisterForm onSubmit={handleRegister} />;
}

export default RegisterPage;
