import { useState } from 'react';
import { Switch, Select, Button, Avatar, Card, Divider } from 'antd';
import { SettingOutlined, BellOutlined, LockOutlined, GlobalOutlined } from '@ant-design/icons';
import { settingStore } from '@/store/setting';
import { userStore } from '@/store/user';

const { Option } = Select;

function App() {
  const [notifications, setNotifications] = useState(true);
  const { isDark, toggleDark, locale, toggleLocale, } = settingStore();
  const { userInfo } = userStore();

  return (
    <div className={`from-gray-900 to-blue-900`}>
      <div className="max-w-auto mx-auto !p-8">
        <div className="flex items-center gap-3 !mb-8">
          <SettingOutlined className="text-2xl" />
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <div className="grid gap-6">
          {/* Profile Section */}
          <Card className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
            <div className="flex items-center gap-4 mb-6">
              <Avatar size={64} src={userInfo.avatar} />
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>john.doe@example.com</p>
              </div>
              <Button type="primary" className="ml-auto">Edit Profile</Button>
            </div>
          </Card>

          {/* Settings Sections */}
          <Card className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
            {/* Appearance */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <SettingOutlined className="text-lg" />
                <h3 className="text-lg font-semibold">Appearance</h3>
              </div>
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <Switch checked={isDark} onChange={toggleDark} />
              </div>
            </div>
            <Divider />

            {/* Notifications */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BellOutlined className="text-lg" />
                <h3 className="text-lg font-semibold">Notifications</h3>
              </div>
              <div className="flex items-center justify-between">
                <span>Enable Notifications</span>
                <Switch checked={notifications} onChange={() => setNotifications(!notifications)} />
              </div>
            </div>
            <Divider />

            {/* Language */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GlobalOutlined className="text-lg" />
                <h3 className="text-lg font-semibold">Language</h3>
              </div>
              <Select value={locale} onChange={toggleLocale} className="w-full">
                <Option value="en">English</Option>
                <Option value="ch">Chinese</Option>
              </Select>
            </div>
            <Divider />

            {/* Security */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LockOutlined className="text-lg" />
                  <h3 className="text-lg font-semibold">Security</h3>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;