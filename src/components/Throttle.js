import {React, useState, useRef} from 'react'

function Throttle() {
    const [count, setCount] = useState(0);
    const [trigger, setTriggered] = useState(0);
    const lastCallTime = useRef(0);

    const throttle = (cb, delay) => {
        const now = new Date().getTime();
        if(now - lastCallTime.current >= delay){
            cb();
            lastCallTime.current = now;
        }
    }

    const handleClick = () => {
        setCount(prev => prev + 1);
        throttle(() => setTriggered((prev) => prev + 1), 1000);
    }

  return (
    <div>
      <button onClick={handleClick}>Throttle</button>
      <p>The button is pressed {count} times</p>
      <p>The button is triggered {trigger} times</p>
    </div>
  )
}

export default Throttle
