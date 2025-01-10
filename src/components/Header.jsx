import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Quản Lý Tiền Bạc</h1>
        <p className="text-xl opacity-90">
          Giải pháp quản lý tài chính cá nhân dễ dàng và hiệu quả!
        </p>
      </div>
    </header>
  );
}

export default Header;
