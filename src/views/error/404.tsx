import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function Error404() {
  const navigate = useNavigate();
  const goToIndex = () => navigate("/index");

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-red-700 to-orange-500"
    >
      <div className="text-white text-6xl font-bold animate-bounce mb-6">404</div>
      <Button type="primary" onClick={goToIndex}>
        Go to Home
      </Button>
    </div>
  );
}
