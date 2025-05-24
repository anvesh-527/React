
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import LoggerComponent from './components/LoggerComponent';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponent';
function App() {

  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(0);


  // first --> side-effect function
  // second --> clean-up function
  // third --> comma seperated dependency list

  // variation:1
  // This will run in each render

  // useEffect(() => {
  //   alert("This will run on each render");
  // });

  // This will render 2 times 
  // This is because we are developing in strict mode (Main.jsx) the app will be runned twice.


  // Variation:2
  // This will run only on the first render
  // useEffect(() => {
  //   alert("I will run only on first render")
  // }, []);

  // Variation:3 (Single Dependency)
  // useEffect(() => {
  //   alert("I will run every time when the count is updated before it is re-rendered");
  // }, [count])

  // Variation:4(Multiple dependencies)
  // useEffect(() => {
  //   alert("They are being changed");
  // }, [count,total])

  // Variation:5
  // useEffect(() => {
  //   alert("Count is updated");
  //   return () => {
  //     alert("Count is unmounted from UI");
  //   }
  // }, [count]);
  // On every click the previous count is being unmounted and the new count is being re-rendered.


  // function handleClick() {
  //   setCount(count+1);
  // }

  // function handleTotal() {
  //   setTotal(total+count);
  // }

  
  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Update Count
  //     </button>
  //     <p>The button is clicked {count} times</p>

  //     <button onClick={handleTotal}>
  //       Update Total
  //     </button>
  //     <p>Total is {total}</p>
  //   </div>
  // )

  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      <MultiEffectComponent />
    </div>
  )
}

export default App
