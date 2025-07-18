import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(5);  
  
  const addValue = () =>{
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  }
  // counter will +1 one time as this whole goes in a batch in useState same work
  // to do it use functional arguement to pass on prev value and update it 
  const addValue = () =>{
    setCounter((prev)=>prev+1)
    setCounter(prev=>prev+1)
    setCounter(prev=>prev+1)
    setCounter(prev=>prev+1)
    setCounter(prev=>prev+1)
  }
//   now this batch will have different work as prev calculated after first setCounter and so on.....
// so it will go to 10 in one click