import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, PieChart, DollarSign, TrendingUp } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-full">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HomePage = () => {
  const features = [
    {
      icon: PieChart,
      title: "Phân tích chi tiêu",
      description: "Hiểu rõ các khoản chi tiêu của bạn thông qua biểu đồ trực quan"
    },
    {
      icon: DollarSign,
      title: "Quản lý ngân sách",
      description: "Lập kế hoạch và theo dõi ngân sách một cách hiệu quả"
    },
    {
      icon: TrendingUp,
      title: "Báo cáo tài chính",
      description: "Xem báo cáo chi tiết về tình hình tài chính của bạn"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Chào mừng đến với Quản Lý Tiền Bạc
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Dự án của chúng tôi giúp bạn kiểm soát tài chính cá nhân một cách hiệu quả,
            cung cấp các tính năng như theo dõi thu chi, lập ngân sách, và phân tích tài chính.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/login"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg
                         hover:bg-green-600 transition-colors duration-300"
            >
              Đăng nhập ngay
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;