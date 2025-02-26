import { Spin } from 'antd'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function AppMain() {
  return (
    <Suspense
      fallback={(
        <div className="h-full w-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    >
      <Outlet />
    </Suspense>
  )
}
