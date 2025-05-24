import UserCard from "./components/UserCard"
import "./App.css"

import Anvesh from "./assets/Anvesh.jpg"
import Shiva from "./assets/shiva.jpg"
import Abdul from "./assets/abdul.jpg"

function App() {
  return (
    <div className="container">
      {/* Here the name is the props */}
      {/* Multiple parameters can be sent using props */}
      {/* Sending style properties using props */}
      <UserCard name="Anvesh" rollno="527" image={Anvesh} style={{"border-radius":"10px"}} />
      <UserCard name="Shiva" rollno="531" image={Shiva} style={{"border-radius":"20px"}} />
      <UserCard name="Abbu" rollno="501" image={Abdul} style={{"border-radius":"30px"}} />
      <UserCard name="Anvesh" rollno="527" image={Anvesh} style={{"border-radius":"10px"}} />
      <UserCard name="Shiva" rollno="531" image={Shiva} style={{"border-radius":"20px"}} />
      <UserCard name="Abbu" rollno="501" image={Abdul} style={{"border-radius":"30px"}} />
      <UserCard name="Anvesh" rollno="527" image={Anvesh} style={{"border-radius":"10px"}} />
      <UserCard name="Shiva" rollno="531" image={Shiva} style={{"border-radius":"20px"}} />
      <UserCard name="Abbu" rollno="501" image={Abdul} style={{"border-radius":"30px"}} />
    </div> 
  )
}

export default App
