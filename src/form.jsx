import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submit } from './features/formSlice';

const Form = () => {
  const [name,setName] =   useState("")
  const [age,setAge] =   useState(0)
  const dispatch =  useDispatch()
  return (
    <div>
        <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='enter age' value={age} onChange={(e)=>setAge(e.target.value)} />
        <button onClick={()=>dispatch(submit({name,age}))}>Submit</button>
    </div>
  );
}

export default Form;
