import {React, useReducer} from 'react'

const ACTIONS = {
    INCREMENT:  "increment",
    DECREMRNT: "decrement",
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        case ACTIONS.DECREMRNT:
            return {count: state.count - 1};
        default:
            return state;        
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    function increment ( ) {
        dispatch({type: ACTIONS.INCREMENT})
    }

    function decrement() {
        dispatch({type: ACTIONS.DECREMRNT})
    }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default UseReducer
