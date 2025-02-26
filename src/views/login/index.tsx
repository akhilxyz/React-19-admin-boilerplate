import LoginSvg from '@/assets/login-bg.svg'
import { userStore } from '@/store/user'
import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const { setUserInfo, setToken } = userStore()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const [form] = Form.useForm()

  async function onFinish(values: { username: string, password: string }) {
    try {
      if (values.username !== 'admin' || values.password !== '123456') {
        messageApi.error('Invalid username or password')
        return
      }
      setLoading(true)

      const { data: { token, userInfo } } = await Promise.resolve({
        data: {
          token: 'sample_token',
          userInfo: {
            username: 'admin',
            avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        },
      })

      setToken(token)
      setUserInfo(userInfo)
      message.success('Login successful')
      navigate('/', { replace: true })
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 px-4">
      {contextHolder}
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl flex overflow-hidden !p-[50px]">
        {/* Left Image Section */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-blue-50 p-6">
          <img src={LoginSvg} alt="Login" className="h-56 object-contain" />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 !p-2">
          <h2 className="text-center text-2xl font-semibold text-blue-700 mb-6">React Admin</h2>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ username: '', password: '' }}
            onFinish={onFinish}
            className="space-y-4"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Username is required' }]}
              className="mb-4"
            >
              <Input placeholder="admin" className="py-2 px-4 rounded-md border-gray-300 focus:ring focus:ring-blue-400" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Password is required' }]}
              className="mb-4"
            >
              <Input.Password placeholder="123456" className="py-2 px-4 rounded-md border-gray-300 focus:ring focus:ring-blue-400" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
