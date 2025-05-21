import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cite");
  };

  return (
    <div className="mt-8 flex items-center justify-center gap-x-8">
      <button
        onClick={handleClick}
        className="mt-12 flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-2xl font-medium text-white shadow-lg transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Button;
