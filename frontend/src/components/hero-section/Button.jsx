import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cite");
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <button
        type="button"
        onClick={handleClick}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get started
      </button>
      <a href="#" className="text-sm font-semibold text-gray-900">
        Learn more <span aria-hidden="true">→</span>
      </a>
    </div>
  );
};

export default Button;