import { lazy } from 'react';
import type { IRoute } from '.';
import { blackList, PageEnum } from '@/enums';
import { AppstoreOutlined } from '@ant-design/icons';
import { iconFactory } from '@/utils/Iconify';

type ImportMetaGlob = Record<string, () => Promise<{ default: React.ComponentType }>>;

const modules = import.meta.glob([
  '../views/**/*.(t|j)sx',
  '!../views/(login|error)/**'
]) as ImportMetaGlob;

const modulesRoutes: Array<IRoute> = Object.entries(modules).map(([key, value]) => {
  const path = key
    .replace('../views', '')
    .replace(/\.(j|t)sx$/, '')
    .replace(/\/index$/, '');
  return {
    path,
    element: ((Component) => <Component />)(lazy(value)),
    meta: {
      title: path,
      icon:  <AppstoreOutlined />
    }
  };
});

const menuList = buildTree(modulesRoutes);

function buildTree(routes: IRoute[]): IRoute[] {
  const root: IRoute[] = [];

  routes.forEach((route) => {
    const parts = route.path.split('/').filter((part :any) => part);
    let currentLevel = root;
    parts.forEach((_part :any, index :any) => {
      const partPath = `/${parts.slice(0, index + 1).join('/')}`;
      let existingNode = currentLevel.find((node) => node.path === partPath);
      if (!existingNode) {
        existingNode = {
          path: partPath,
          element: null,
          children: [],
          meta: {
            title: partPath.slice(1),
            icon:  iconFactory(partPath.slice(1) )
          }
        };
        currentLevel.push(existingNode);
      }

      if (index === parts.length - 1) existingNode = { ...route };

      if (!existingNode.children) existingNode.children = [];

      currentLevel = existingNode.children;
    });
  });


  const filteredData = root
  .filter(item => !blackList.includes(item.path.replace('/', '')))
  .sort((a, b) => (a.path === PageEnum.ROOT_INDEX ? -1 : b.path === PageEnum.ROOT_INDEX ? 1 : 0));

  return filteredData;
}

export { modulesRoutes, menuList };
