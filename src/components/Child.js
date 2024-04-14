import {React, useState} from 'react'

function Child({onUpdateParent}) {
    const [childState, setChildState] = useState("Initial Child State");

    function updateChildState() {
        const newChildState = "Updated Child State"
        setChildState(newChildState);

        onUpdateParent(newChildState);
    }

  return (
    <div>
      <h2>Child Component</h2>
      <p>Child State: {childState}</p>
      <button onClick={updateChildState}>Update Parent</button>
    </div>
  )
}

export default Child
