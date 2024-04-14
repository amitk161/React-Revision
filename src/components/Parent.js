import {React, useState} from 'react'
import Child from './Child';

function Parent() {
    const [parentState, setParentState] = useState("Initial Parent State");

    function updateParent(newState) {
        const modifiedState = `Modified ${newState}`
        setParentState(modifiedState);
    }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Parent State: {parentState}</p>
      <Child onUpdateParent={updateParent}/>
    </div>
  )
}

export default Parent
