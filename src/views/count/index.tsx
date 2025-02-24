import { Button, DatePicker, Space } from 'antd';
import { countStore } from '@/store/count';

export default function Count() {
  const { count, decrement, increment } = countStore();

  return (
    <div className="flex flex-col items-center justify-center mt-[100px] from-gray-900 to-blue-900 p-6 ">
      <div className="mb-4">
        <Button type="primary" className="text-xl px-6 py-2">{count}</Button>
      </div>
      <Space className="mb-4 !m-5">
        <Button type="primary" className="px-4 py-2" onClick={() => decrement(1)}>
          -
        </Button>
        <Button type="primary" className="px-4 py-2" onClick={() => increment(1)}>
          +
        </Button>
      </Space>
      <div className="p-2 bg-white shadow-md rounded-lg">
        <DatePicker className="w-full" />
      </div>
    </div>
  );
}
