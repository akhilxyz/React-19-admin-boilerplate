import { useState } from 'react';
import { Table, Input, Select, Space, Tag } from 'antd';
import type { TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface UserData {
  key: string;
  name: string;
  age: number;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
  lastLogin: string;
}

const { Option } = Select;

const dummyData: UserData[] = Array.from({ length: 100 }, (_, i) => ({
  key: i.toString(),
  name: `User ${i + 1}`,
  age: 20 + Math.floor(Math.random() * 40),
  email: `user${i + 1}@example.com`,
  status: ['active', 'inactive', 'pending'][Math.floor(Math.random() * 3)] as UserData['status'],
  role: ['Admin', 'User', 'Editor', 'Viewer'][Math.floor(Math.random() * 4)],
  lastLogin: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
}));

function UserList() {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [roleFilter, setRoleFilter] = useState<string[]>([]);

  const columns: TableProps<UserData>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      filteredValue: searchText ? [searchText] : null,
      onFilter: (_, record) =>
        record.name.toLowerCase().includes(searchText.toLowerCase()) ||
        record.email.toLowerCase().includes(searchText.toLowerCase()),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={
          status === 'active' ? 'green' :
            status === 'inactive' ? 'red' :
              'orange'
        }>
          {status.toUpperCase()}
        </Tag>
      ),
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
        { text: 'Pending', value: 'pending' },
      ],
      filteredValue: statusFilter,
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'User', value: 'User' },
        { text: 'Editor', value: 'Editor' },
        { text: 'Viewer', value: 'Viewer' },
      ],
      filteredValue: roleFilter,
      onFilter: (value, record) => record.role === value,
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      sorter: (a, b) => new Date(a.lastLogin).getTime() - new Date(b.lastLogin).getTime(),
    },
  ];

  return (
    <div className="items-center justify-center">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold !mb-10">User Management</h1>

        <div className="rounded-lg shadow-sm p-6 from-gray-900 to-blue-900">
          <div className="!mb-6">
            <Space size="large">
              <Input
                placeholder="Search by name or email"
                prefix={<SearchOutlined className="text-gray-400" />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-64"
                allowClear
              />

              <Select
                mode="multiple"
                placeholder="Filter by status"
                value={statusFilter}
                onChange={setStatusFilter}
                className="min-w-[200px]"
                allowClear
              >
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
                <Option value="pending">Pending</Option>
              </Select>

              <Select
                mode="multiple"
                placeholder="Filter by role"
                value={roleFilter}
                onChange={setRoleFilter}
                className="min-w-[200px]"
                allowClear
              >
                <Option value="Admin">Admin</Option>
                <Option value="User">User</Option>
                <Option value="Editor">Editor</Option>
                <Option value="Viewer">Viewer</Option>
              </Select>
            </Space>
          </div>

          <Table
            columns={columns}
            dataSource={dummyData}
            pagination={{
              total: dummyData.length,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total) => `Total ${total} users`,
            }}
            size="middle"
            bordered
            scroll={{ x: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default UserList;
