import {useDispatch, useSelector} from "react-redux"
import { Decrement, Increment, Incrementby5 } from './features/counterSlice';
import Form from "./form";

function App() {
  const {count1,count2} = useSelector((state)=> state.counter)
  const {name,age} = useSelector((state)=> state.form)
 const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Redux toolkit</h1>
      <h1>count : {count1}</h1>
      <h1>count2 : {count2}</h1>
      <button onClick={()=> dispatch(Increment())}>Increment</button>
      <button onClick={()=> dispatch(Decrement())}>Decrement</button>
      <button onClick={()=> dispatch(Incrementby5())}>Incrementby5</button>
      <h1>name : {name}</h1>
      <h1>age : {age}</h1>

   <Form/>
    </div>
  );
}

export default App;




