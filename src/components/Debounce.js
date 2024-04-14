import { React, useEffect, useRef, useState } from "react";

function Debounce() {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(0);
  const initialMount = useRef(true);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    } else {
      const timer = setTimeout(() => {
        setTrigger(trigger + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>Debounce</button>
      <p>The button is pressed {count} times</p>
      <p>The button is triggered {trigger} times</p>
    </div>
  );
}

export default Debounce;
