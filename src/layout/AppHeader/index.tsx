import { useContext } from "react";
import { MenuProps, Avatar, Dropdown, Tooltip } from "antd";
import {
  MenuOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GithubOutlined,
  ReloadOutlined,
  SunOutlined,
  MoonOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { userStore } from "@/store/user";
import { AppLayoutContext } from "@/layout/AppContext";
import { settingStore } from "@/store/setting";
import { useFullscreen } from "@/hooks/useFullscreen";
import { useNavigate } from "react-router-dom";
import Notification from "@/components/Notification";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "settings",
  },
  {
    key: "2",
    label: "Logout",
  },
];

export default function AppHeader({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (e: boolean) => void;
}) {
  const { userInfo } = userStore();
  const { isDark, toggleDark, locale, toggleLocale } = settingStore();
  const { refresh } = useContext(AppLayoutContext);
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body);
  const navigate = useNavigate()
  function onDropdownClick({ key }: any) {
    if (key === "1") {
      navigate("/setting")
    }
    else if (key === "2") {
      window.localStorage.clear();
      window.location.reload();
    }
  }

  const IconButton = ({
    onClick,
    children,
    title,
  }: {
    onClick: () => void;
    children: React.ReactNode;
    title: string;
  }) => (
    <Tooltip title={title}>
      <button
        onClick={onClick}
        className={`p-2 rounded-full flex items-center justify-center 
          cursor-pointer
        ${isDark ? "text-gray-400 hover:bg-gray-800 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
      >
        {children}
      </button>
    </Tooltip>
  );

  return (
    <div
      className={`h-16 flex items-center justify-between px-6  border-b 
      ${isDark ? "bg-dark-900 border-gray-900" : "bg-white border-gray-200"}`}
    >
      <div className="flex items-center">
        <IconButton
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expand menu" : "Collapse menu"}
        >
          <MenuOutlined className="text-lg cursor-pointer" />
        </IconButton>
      </div>
      <div className="flex justify-end items-center gap-8">
        <div className="flex justify-end items-center gap-4">
          <IconButton
            onClick={() => toggleLocale(locale === "zh-cn" ? "en" : "zh-cn")}
            title={`Switch to ${locale === "zh-cn" ? "English" : "Chinese"}`}
          >
            <SwapOutlined className="text-lg" />
          </IconButton>

          <IconButton
            onClick={() => window.open("https://github.com/akhilxyz/React-19-admin-boilerplate")}
            title="View on GitHub"
          >
            <GithubOutlined className="text-lg" />
          </IconButton>

          <IconButton
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <FullscreenExitOutlined className="text-lg" />
            ) : (
              <FullscreenOutlined className="text-lg" />
            )}
          </IconButton>

          <IconButton
            onClick={toggleDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <MoonOutlined className="text-lg" /> : <SunOutlined className="text-lg" />}
          </IconButton>

          <IconButton onClick={refresh} title="Refresh page">
            <ReloadOutlined className="text-lg" />
          </IconButton>
          <Notification/>
          {/* <IconButton onClick={refresh} title="Refresh page">
          <BellOutlined/>
            </IconButton> */}

          
          {/* <Notification/> */}
        </div>

        <Dropdown menu={{ items, onClick: onDropdownClick }} placement="bottomRight">
          <div
            className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-full transition-all duration-200 
            ${isDark ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700"}`}
          >
            <span className="text-sm font-medium !mr-[10px]">{userInfo.username || "Guest"}</span>
            <Avatar
              size={32}
              src={userInfo.avatar}
              className={`border-2 ${isDark ? "border-gray-700" : "border-gray-200"}`}
            />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
