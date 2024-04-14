import React from 'react'
import useTheme from './UseTheme'

function ChangeTheme() {
    const {theme, toggleTheme} = useTheme();

  return (
    <div style={{background: theme === 'light' ? '#ffffff' : '#000000', color: theme === 'light' ? '#000000' : '#ffffff'}}>
      <h1>{`Current theme is ${theme}`}</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChangeTheme
