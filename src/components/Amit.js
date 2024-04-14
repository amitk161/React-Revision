import {React, useState} from 'react'
import subjects from './HOC';

function Amit(props) {
    const [marks, setMarks] = useState(0);

    const handleMarks = () => {
        setMarks(marks+1);
    }

  return (
    <div onMouseOver={handleMarks}>
      Amit's marks is: {marks} and he studies {props.hocsub}
    </div>
  )
}

export default subjects(Amit);
