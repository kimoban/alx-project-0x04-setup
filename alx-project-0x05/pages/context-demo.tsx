import Layout from '@/components/layouts/Layout';
import { useCount } from '@/context/CountContext';

const ContextDemo: React.FC = () => {
  const { count, increment, decrement, reset } = useCount();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">🌟 Context API Demo 🌟</h1>
            <p className="text-xl text-white opacity-90">
              Notice how the counter in the header updates when you click buttons here!
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Global Counter</h2>
              
              {/* Counter Display */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-6xl font-bold py-8 px-12 rounded-xl mb-8 shadow-lg">
                {count}
              </div>

              {/* Status Message */}
              <p className="text-lg text-gray-600 mb-8">
                {count === 0 && "🚀 Start counting!"}
                {count > 0 && count < 10 && "👍 Getting started!"}
                {count >= 10 && count < 50 && "🔥 You're on fire!"}
                {count >= 50 && count < 100 && "⚡ Amazing streak!"}
                {count >= 100 && "🏆 You're a champion!"}
              </p>

              {/* Control Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={increment}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  ➕ Increment
                </button>
                <button
                  onClick={decrement}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  ➖ Decrement
                </button>
                <button
                  onClick={reset}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  🔄 Reset
                </button>
              </div>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Context API Features:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ Global state management</li>
                  <li>✅ No prop drilling required</li>
                  <li>✅ Shared state across components</li>
                  <li>✅ Header and this page share the same counter!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContextDemo;
