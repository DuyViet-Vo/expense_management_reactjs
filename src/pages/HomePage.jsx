import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Chào mừng đến với Quản Lý Tiền Bạc</h2>
        <p>
          Dự án của chúng tôi giúp bạn kiểm soát tài chính cá nhân một cách hiệu
          quả, cung cấp các tính năng như theo dõi thu chi, lập ngân sách, và
          phân tích tài chính.
        </p>
        <p>
          <a
            href="/login"
            style={{
              color: "#4CAF50",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Đăng nhập ngay
          </a>{" "}
          để bắt đầu hành trình quản lý tiền bạc của bạn!
        </p>
      </main>
      <Footer class="pb-8"/>
    </div>
  );
}

export default HomePage;
