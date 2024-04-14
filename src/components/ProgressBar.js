import React from 'react'

function ProgressBar({value = 0}) {
  return (
    <div className='progress'>
        <span>{value.toFixed()}%</span>
    </div>
  )
}

export default ProgressBar
