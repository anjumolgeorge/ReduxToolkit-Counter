import {useDispatch, useSelector} from "react-redux"
import { Decrement, Increment } from './features/counterSlice';

function App() {
  const {count1} = useSelector((state)=> state.counter)
 const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Redux toolkit</h1>
      <h1>count : {count1}</h1>
      <button onClick={()=> dispatch(Increment())}>Increment</button>
      <button onClick={()=> dispatch(Decrement())}>Decrement</button>
    </div>
  );
}

export default App;
