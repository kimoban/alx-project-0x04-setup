import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface";
import { FaHeart, FaStar, FaUser, FaRocket } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false})
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Icon Display */}
      <div className="flex gap-6 mb-6">
        <FaRocket className="text-4xl text-blue-500" />
        <FaHeart className="text-4xl text-red-500" />
        <FaStar className="text-4xl text-yellow-500" />
        <FaUser className="text-4xl text-green-500" />
      </div>

      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Splash App!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Options */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Generate Text" buttonBackgroundColor="blue" />
        <Button action={() => routeToNextPage({ pageRoute: '/text-to-image'})} buttonLabel="Text to Image" buttonBackgroundColor="green" />
        <Button action={() => routeToNextPage({ pageRoute: '/counter-app'})} buttonLabel="Counter App" buttonBackgroundColor="orange" />
        <Button action={() => routeToNextPage({ pageRoute: '/context-demo'})} buttonLabel="Context Demo" buttonBackgroundColor="purple" />
      </div>
    </div>
  );
}
