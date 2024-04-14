import { React, useState, useEffect } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?page=${page}`
      );
      const data = await response.json();
      setData((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handleScroll = () => {
    try {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            setLoading(true);
            setPage(prev => prev + 1);
        }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <div>
      <h1>Infinte Scroll</h1>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h3>Title: {item.title}</h3>
            </div>
          );
        })}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;
