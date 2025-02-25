import { useState, useEffect } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Menu } from 'antd';

function Notification() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New message received',
      description: 'John Doe sent you a message',
      time: '2 minutes ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Order shipped',
      description: 'Your order #12345 has been shipped',
      time: '2 hours ago',
      unread: false,
    },
    {
      id: 3,
      title: 'System update',
      description: 'System update completed successfully',
      time: '1 day ago',
      unread: false,
    },
  ]);

  useEffect(() => {
    const count = notifications.filter((n) => n.unread).length;
    setUnreadCount(count);
  }, [notifications]);

  const handleMenuClick = () => {
    // do something...
  };

  const viewNotification = (id: string | number) => {
    const readNotification = notifications.map((n) => {
      if (n.id === id) {
        return { ...n, unread: false }
      }
      return n;
    }
    )
    setNotifications(readNotification);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      {notifications.length > 0 ? (
        <>
          {
            notifications.map((item) => (
              <Menu.Item key={item.id} className={item.unread ? 'notification-unread' : ''}>
                <div onClick={() => viewNotification(item.id)}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <small>{item.time}</small>
                </div>
              </Menu.Item>
            ))
          }
          <Menu.Item key={'viewAll'} style={{ textAlign: "center", color: "#0484bf" }}>
            View all notifications
          </Menu.Item>
        </>

      ) : (
        <Menu.Item disabled>No notifications</Menu.Item>
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <Badge count={unreadCount} overflowCount={10}>
        <BellOutlined className={`text-xl cursor-pointer ${unreadCount > 0 ? 'wiggle' : ''}`} />
      </Badge>
    </Dropdown>
  );
}

export default Notification;
