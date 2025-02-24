import { Card, Row, Col, Typography } from 'antd';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Title, Text } = Typography;

const salesData = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
  { month: 'Mar', sales: 2000, profit: 9800 },
  { month: 'Apr', sales: 2780, profit: 3908 },
  { month: 'May', sales: 1890, profit: 4800 },
  { month: 'Jun', sales: 2390, profit: 3800 },
];

const userStats = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 300 },
  { name: 'New', value: 300 },
];

const revenueData = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

function Dashboard() {
  return (
    <div className="min-h-screen from-gray-900 to-blue-900 p-6">
      <Row gutter={[16, 16]}>
        {["Total Revenue", "Total Users", "Total Orders", "Conversion Rate"].map((title, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className="shadow-md rounded-xl">
              <Text type="secondary">{title}</Text>
              <Title level={3} className="mt-2">{["$24,780", "1,482", "482", "3.24%"][index]}</Title>
              <Text type="success">+{["12.5", "8.1", "5.4", "2.1"][index]}% from last month</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} className="!mt-6">
        <Col xs={24} lg={12}>
          <Card className="shadow-md rounded-xl">
            <Title level={4}>Sales Overview</Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={2} />
                <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card className="shadow-md rounded-xl">
            <Title level={4}>Revenue Trend</Title>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#6366F1" fill="#818CF8" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]} className="!mt-6">
        <Col xs={24} lg={12}>
          <Card className="shadow-md rounded-xl">
            <Title level={4}>User Distribution</Title>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={userStats} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value" label>
                  {userStats.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={["#4F46E5", "#10B981", "#F59E0B"][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card className="shadow-md rounded-xl">
            <Title level={4}>Monthly Sales</Title>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#4F46E5" />
                <Bar dataKey="profit" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
