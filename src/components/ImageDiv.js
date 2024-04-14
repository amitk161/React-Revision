import {React, useEffect, useState} from 'react'

function ImageDiv() {
    const [image, setImage] = useState(null);

    const handleClick = async () => {
        const photoId = Math.floor(Math.random() * 5000) + 1;
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
        const data = await response.json();
        const url = data.url;
        setImage(url);
    }

    useEffect(() => {
        handleClick();
    }, [])

  return (
    <div>
      <img src={image} alt="api image"/>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default ImageDiv
