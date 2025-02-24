import * as Icons from "@ant-design/icons";
import { createElement } from "react";

export const iconFactory = (iconName: string) => {
  // Capitalize the first letter of the icon name
  const formattedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);

  // Try to get the icon from Ant Design's icons
  const IconComponent = 
    (Icons as any)[`${formattedName}Outlined`] || 
    (Icons as any)[`${formattedName}Filled`] || 
    (Icons as any)[`${formattedName}TwoTone`] || 
    Icons.AppstoreOutlined; // Default icon if not found

  return createElement(IconComponent);
};
