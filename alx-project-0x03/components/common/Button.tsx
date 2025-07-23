import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor, action }) => {
  const getBackgroundColor = () => {
    switch (buttonBackgroundColor) {
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'orange':
        return 'bg-orange-500 hover:bg-orange-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <button
      onClick={action}
      className={`px-4 py-2 text-white font-medium rounded-md transition-colors ${getBackgroundColor()}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;