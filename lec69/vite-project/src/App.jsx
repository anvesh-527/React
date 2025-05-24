import { createContext } from 'react';
import './App.css'
import A from './components/A';
import { useState } from 'react';

// S-1 : Create Context
// const UserContext = createContext();

// S-2: Wrap all the child inside a provider
// We have to wrap all those childs who can become providers in <UserContext.Provider>

// S-3: Pass Value

// S-4: Consumer ke andar jaake consume karlo
const ThemeContext = createContext();

function App() {
  // const [user,setUser] = useState({name:"Anvesh"});
  const [theme,setTheme] = useState('light');
  return (
    <div>
      {/* <UserContext.Provider value={user} >
        <A />
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <A  />
        </div>
        
      </ThemeContext.Provider>
      
    </div>
  )
}

export default App
export {ThemeContext}