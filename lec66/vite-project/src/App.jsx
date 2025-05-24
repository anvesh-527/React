 import { useState } from 'react'
import './App.css'
import LogOutBtn from './components/LogOutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false); 

  // Early return
  if(!isLoggedIn) {
    return (
      <LoginBtn/>
    )
  }

  // Logical operators
  return (
    <div>
      <h1>Welcome </h1>
      <div>
        {isLoggedIn && <LogOutBtn/> }
        {/* {!isLoggedIn && <LoginBtn/>} */}
      </div>
    </div>
  )

  // Using ternary operator
  // return (
  //   <div>
  //     {isLoggedIn ? <LogOutBtn /> : <LoginBtn/>}
  //   </div>
  // )

  // Usinng if-else Statement
  // if (isLoggedIn) {
  //   return (
  //     <LogOutBtn>
        
  //     </LogOutBtn>
  //   )
  // } else {
  //   return (
  //     <LoginBtn>

  //     </LoginBtn>
  //   )
  // }
}

export default App
