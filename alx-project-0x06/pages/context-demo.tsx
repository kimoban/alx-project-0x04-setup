import Layout from '@/components/layouts/Layout';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { increment, decrement, reset, incrementByAmount } from '@/store/counterSlice';

const ReduxDemo: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">🌟 Redux Demo 🌟</h1>
            <p className="text-xl text-white opacity-90">
              Notice how the counter in the header updates when you click buttons here!
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Global Counter with Redux</h2>
              
              {/* Counter Display */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-6xl font-bold py-8 px-12 rounded-xl mb-8 shadow-lg">
                {count}
              </div>

              {/* Status Message */}
              <p className="text-lg text-gray-600 mb-8">
                {count === 0 && "🚀 Start counting with Redux!"}
                {count > 0 && count < 10 && "👍 Getting started with Redux!"}
                {count >= 10 && count < 50 && "🔥 Redux state is working!"}
                {count >= 50 && count < 100 && "⚡ Amazing Redux streak!"}
                {count >= 100 && "🏆 Redux Master!"}
              </p>

              {/* Control Buttons */}
              <div className="flex justify-center gap-4 flex-wrap mb-6">
                <button
                  onClick={() => dispatch(increment())}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  ➕ Increment
                </button>
                <button
                  onClick={() => dispatch(decrement())}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  ➖ Decrement
                </button>
                <button
                  onClick={() => dispatch(reset())}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  🔄 Reset
                </button>
              </div>

              {/* Advanced Redux Features */}
              <div className="flex justify-center gap-2 mb-8">
                <button
                  onClick={() => dispatch(incrementByAmount(5))}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded text-sm transition duration-300"
                >
                  +5
                </button>
                <button
                  onClick={() => dispatch(incrementByAmount(10))}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded text-sm transition duration-300"
                >
                  +10
                </button>
                <button
                  onClick={() => dispatch(incrementByAmount(25))}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded text-sm transition duration-300"
                >
                  +25
                </button>
              </div>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Redux Features:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ Predictable state management</li>
                  <li>✅ Time-travel debugging with Redux DevTools</li>
                  <li>✅ Immutable state updates</li>
                  <li>✅ Scalable for large applications</li>
                  <li>✅ Header and this page share the same store!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReduxDemo;
