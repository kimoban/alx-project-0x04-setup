import Link from 'next/link';
import { FaHome, FaHeart, FaStar, FaUser, FaExclamationTriangle } from 'react-icons/fa'; 

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <div className="mb-8">
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you&#39;re looking for doesn&#39;t exist.
      </p>
      <div className="flex gap-4 mb-8">
        <FaHeart className="text-2xl text-red-500" />
        <FaStar className="text-2xl text-yellow-500" />
        <FaUser className="text-2xl text-blue-500" />
      </div>
      <Link
        href="/"
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
}

export default Custom404;