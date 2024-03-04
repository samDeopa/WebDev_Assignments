import { useRecoilValue,useRecoilState } from "recoil"
import { CountContext } from "./components/Context";
import { countAtom } from "../../../week-7/store/atoms/count";

function App() {
  
  return (
    <div>
      
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer  />
    <Buttons  />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count , setCount] = useRecoilState();
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App