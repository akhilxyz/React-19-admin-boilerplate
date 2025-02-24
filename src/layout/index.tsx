import { createContext, useEffect, useState } from 'react';
import { Layout, Spin, theme } from 'antd';
import { routerStore } from '@/store/router';

import AppHeader from '@/layout/AppHeader';
import AppMain from '@/layout/AppMain';
import AppTabs from '@/layout/AppTabs';
import AppMenu from '@/layout/AppMenu';
import { useThrottle } from '@/hooks/useThrottle';
import { useLocation } from 'react-router-dom';
import { blackList } from '@/enums';

const { Sider, Header, Content } = Layout;

const defaultContext = {
  refresh: () => ({})
};
export const AppLayoutContext = createContext<{
  refresh: () => void;
}>(defaultContext);

export default function AppLayout() {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const [refreshing, setRefreshing] = useState(false);
  const { setMenuList } = routerStore();
  const [collapsed, setCollapsed] = useState(false);
  const [showTabs, setShowTabs] = useState(true);
  const location = useLocation()

  function handleSize() {
    setCollapsed(window.innerWidth < 800);
  }

  useEffect(() => {
    if(blackList.includes(location.pathname.replace('/', ''))) {
      setShowTabs(false);
    } else {
      setShowTabs(true);
    }
  }, [location?.pathname]);

  function refresh() {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    });
  }

  // Use the hook properly
  const throttledHandleSize = useThrottle(handleSize, 500);

  useEffect(() => {
    setMenuList();
    throttledHandleSize();

    window.addEventListener('resize', throttledHandleSize);
    return () => {
      window.removeEventListener('resize', throttledHandleSize);
    };
  }, [setMenuList]);

  return (
    <AppLayoutContext.Provider value={{ refresh }}>
      {!refreshing ? (
        <Layout className="h-[100vh]">
          <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
            <AppMenu collapsed={collapsed} />
          </Sider>
          <Layout>
            <Header className="h-auto px-0 leading-none" style={{ background: colorBgContainer, padding: '0px 20px 0px 0px' }}>
              <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
              {showTabs && <AppTabs />}
            </Header>
            <Content className="overflow-y-auto  overflow-hidden p-[20px]" style={{ margin: "50px" }}>
              <AppMain />
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Layout className="h-[100vh] flex items-center justify-center overflow-hidden">
          <Spin size="large" />
        </Layout>
      )}
    </AppLayoutContext.Provider>
  );
}


// .top-card {
//   margin-top: 3rem;
//   padding: 20px;
// }