import React from 'react'
// import { UserContext } from '../App'
import { useContext } from 'react'
import { ThemeContext } from '../App';
const C = () => {
    // const user = useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function changeTheme() {
        if(theme ==='light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
  return (
    <div>
      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default C
