import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(5);  
  let [disabled,setDiablity] = useState(false);
  // let counter = 5;
  
  const addValue = () =>{
    setCounter(counter+1)
    if(counter==0)setDiablity(false)
  }
  
  const removeValue = () =>{
    if(counter!=0)
      setCounter(counter-1)
    if(counter==1){
      setDiablity(true)
    }
  }

  return (
    <>
      <h1>Chai aur code !</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button> 
      
      <br/> <br/>

      <button
      onClick={removeValue} disabled={disabled}
      >Remove value</button>
    </>
  )
}
export default App;