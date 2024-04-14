import React from 'react'
import ProgressBar from "./ProgressBar"
import "./Progress.css";

function Progress() {
  return (
    <div className='app'>
        <span>Progress Bar</span>
      <ProgressBar value={25}/>
    </div>
  )
}

export default Progress
