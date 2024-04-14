import {React, useState} from 'react'
import axios from 'axios';

function AxiosPost() {
    const [input, setInput] = useState('');
    const [body, setBody] = useState('');

    function handleInput(e) {
        setInput(e.target.value);
    }

    function handleBody(e) {
        setBody(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", postData);
            console.log(res.data);
        } catch (err) {
            console.log(err.message);
        }
    }


    const postData = {
        title: input,
        body: body
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input value={input} placeholder='Input' onChange={handleInput}/>
        </div>
        <div>
            <label>Body</label>
            <input value={body} placeholder='Body' onChange={handleBody}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AxiosPost
