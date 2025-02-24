import { JSX, lazy, Suspense } from 'react'
import { modulesRoutes } from './moduleRoutes'
import Layout from '@/layout/index'

const Login = lazy(() => import('@/views/login'))
const Error404 = lazy(() => import('@/views/error/404'))
const Error403 = lazy(() => import('@/views/error/403'))

interface IRoute {
  path: string
  element: React.ReactNode | null
  meta: {
    title?: string
    icon?: JSX.Element
    hide?: boolean
  }
  redirect?: string
  children?: IRoute[]
}

const staticList: IRoute[] = [
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
    meta: {
      title: 'Login',
    },
  },
]

export const routerList: IRoute[] = [
  {
    path: '/',
    element: <Layout />,
    meta: {
      title: 'Layout',
    },
    children: modulesRoutes,
  },
  ...staticList,
  {
    path: '403',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Error403 />
      </Suspense>
    ),
    meta: {
      title: '403',
    },
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Error404 />
      </Suspense>
    ),
    meta: {
      title: '404',
    },
  },
]
