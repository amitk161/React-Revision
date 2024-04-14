import { React, useState, useEffect } from "react";
import axios from "axios";
import API from "./CreateAxios";

function AxiosGet() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

//   const getData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => setData(response.data))
//       .catch((err) => setError(err.message));
//   };

// const getData = async() => {
//     try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         setData(res.data);
//     } catch (err){
//         setError(err.message);
//     }
// }

const getData = async() => {
    try{
        const res = await API.get("/posts");
        setData(res.data);
    } catch (err) {
        setError(err.message);
    }
}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      List of data-
      {error !== "" && <h2>{error}</h2>}

      {data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AxiosGet;
