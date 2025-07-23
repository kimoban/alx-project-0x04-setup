import Link from "next/link";
import Button from "../common/Button";
import { FaHeart, FaStar, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
          <FaHeart className="text-red-500" />
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 mr-4">
            <FaStar className="text-yellow-500" />
            <FaUser className="text-blue-500" />
          </div>
          <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;