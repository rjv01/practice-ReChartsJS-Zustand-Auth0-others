import AreaChartss from "./componets/AreaChartss"
import LineChartss from "./componets/LineChartss";
import LoginButton from "./componets/LoginButton";
import LogoutButton from "./componets/LogoutButton";
import PieCharts from "./componets/PieCharts";
import { useCounterStore } from "./Stores/store";

function App() {
  const count = useCounterStore((state)=> state.count);
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 rounded-2xl border-2 p-2 m-4">
        <LoginButton />
        <LogoutButton />
      </div>
      <OtherComponent count={count} />
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center w-full max-w-7xl border p-4 m-4">
        <div className="bg-gray-400 sm:h-85 sm:w-85 p-4 m-2 h-70 w-70 rounded-2xl">
          <AreaChartss />
        </div>
        <div className="bg-gray-400 sm:h-85 sm:w-85 p-4 m-2 h-70 w-70 rounded-2xl">
          <LineChartss />
        </div>
        <div className="bg-gray-400 sm:h-85 sm:w-85 p-4 m-2 h-70 w-70 rounded-2xl">
          <PieCharts />
        </div>
      </div>
    </div>
  );
}

const OtherComponent = ({count}:{count:number})=>{
  const increment = useCounterStore((state)=>state.increment);
  // const decrement = useCounterStore((state)=>state.decrement);
  const decrement = useCounterStore.getState().decrement;

  return (
    <div className="border flex flex-col justify-center items-center h-10 mx-auto p-6">
      <h1>Zustand practice</h1>
      <div className="flex gap-8">
        <button
          onClick={increment}  
        >Plus</button>
        <p>{count}</p>
        <button
          onClick={decrement}
        >Minus</button>
      </div>
    </div>
  )
}

export default App
