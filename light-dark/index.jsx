import React from 'react'
import useLocalStorage from './useLocalStorage'

function LightDark() {
    const [theme,setTheme] = useLocalStorage("theme","dark");

    function changeTheme(){
        setTheme(theme === "light"?"dark":"light");
        console.log(theme);
    }
  return (
    <div>
      <p>Hello World</p>
      <button onClick={changeTheme}>{theme}</button>
    </div>
  )
}

export default LightDark
