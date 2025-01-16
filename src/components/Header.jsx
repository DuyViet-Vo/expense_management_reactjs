import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkToken = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", checkToken);

    return () => window.removeEventListener("storage", checkToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2 animate-fade-in">Quản Lý Tiền Bạc</h1>
          <p className="text-xl opacity-90">
            Giải pháp quản lý tài chính cá nhân dễ dàng và hiệu quả!
          </p>
        </div>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-white text-green-600 font-semibold py-2 px-4 rounded shadow hover:bg-green-50 transition"
          >
            Đăng xuất
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
