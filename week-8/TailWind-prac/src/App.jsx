import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <RevenueCard
          title={"Next Payout"}
          amount={2000}
          orderCount={20}
        ></RevenueCard>
      </div>
    </>
  );
}

export default App;
