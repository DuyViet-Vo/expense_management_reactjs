import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  Wallet, TrendingUp, TrendingDown, DollarSign, 
  PieChart as PieChartIcon, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

const DashboardPage = () => {
  // Dữ liệu mẫu cho biểu đồ chi tiêu theo tháng
  const monthlyData = [
    { month: 'T1', thu: 4000, chi: 2400 },
    { month: 'T2', thu: 3000, chi: 1398 },
    { month: 'T3', thu: 2000, chi: 9800 },
    { month: 'T4', thu: 2780, chi: 3908 },
    { month: 'T5', thu: 1890, chi: 4800 },
    { month: 'T6', thu: 2390, chi: 3800 },
  ];

  // Dữ liệu mẫu cho biểu đồ phân loại chi tiêu
  const pieData = [
    { name: 'Ăn uống', value: 400 },
    { name: 'Di chuyển', value: 300 },
    { name: 'Mua sắm', value: 300 },
    { name: 'Giải trí', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const StatCard = ({ title, value, icon: Icon, trend, trendValue }) => {
    const isPositive = trend === 'up';
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className="p-3 bg-green-100 rounded-lg">
            <Icon className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          )}
          <span className={`ml-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trendValue}
          </span>
          <span className="text-gray-500 ml-2">so với tháng trước</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Thêm giao dịch
          </button>
        </div>

        {/* Thống kê tổng quan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Tổng thu" 
            value="15.000.000đ" 
            icon={Wallet}
            trend="up"
            trendValue="12%"
          />
          <StatCard 
            title="Tổng chi" 
            value="8.500.000đ" 
            icon={TrendingDown}
            trend="down"
            trendValue="5%"
          />
          <StatCard 
            title="Số dư" 
            value="6.500.000đ" 
            icon={DollarSign}
            trend="up"
            trendValue="8%"
          />
          <StatCard 
            title="Tiết kiệm" 
            value="2.000.000đ" 
            icon={TrendingUp}
            trend="up"
            trendValue="15%"
          />
        </div>

        {/* Biểu đồ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Thu chi theo tháng</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="thu" fill="#4CAF50" name="Thu" />
                  <Bar dataKey="chi" fill="#FF5252" name="Chi" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Phân loại chi tiêu</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-600">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Giao dịch gần đây */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Giao dịch gần đây</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Ngày</th>
                  <th className="text-left py-3 px-4">Mô tả</th>
                  <th className="text-left py-3 px-4">Danh mục</th>
                  <th className="text-right py-3 px-4">Số tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">10/01/2025</td>
                  <td className="py-3 px-4">Cafe sáng</td>
                  <td className="py-3 px-4">Ăn uống</td>
                  <td className="py-3 px-4 text-right text-red-500">-35.000đ</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">10/01/2025</td>
                  <td className="py-3 px-4">Lương tháng 1</td>
                  <td className="py-3 px-4">Thu nhập</td>
                  <td className="py-3 px-4 text-right text-green-500">+15.000.000đ</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">09/01/2025</td>
                  <td className="py-3 px-4">Mua sắm</td>
                  <td className="py-3 px-4">Quần áo</td>
                  <td className="py-3 px-4 text-right text-red-500">-500.000đ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;