import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function Error403() {
  const navigate = useNavigate();
  const goToIndex = () => navigate("/index");

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-purple-700 to-pink-500"
    >
      <div className="text-white text-6xl font-bold animate-bounce mb-6">403</div>
      <Button type="primary" onClick={goToIndex}>
        Go to Home
      </Button>
    </div>
  );
}
