import React, { useState, useEffect } from 'react'
import "./Pagination.css"

function Pagination() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);

    const fetchData = async() => {
        const response = await fetch("https://dummyjson.com/products?limit=100")
        const data = await response.json();
        
        if(data && data.products){
            setProducts(data.products);
        }
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const selectedPage = (selected) => {
        if(selected >= 1 && selected <= products.length/10 && selected !== page){
            setPage(selected)
        }
    }

  return (
    <div>
      {
        products.length > 0 && <div className='products'>
            {
                products.slice(page * 10 - 10, page * 10).map((prod) => {
                    return <span className="products__single" key={prod.id}>
                        <img src={prod.thumbnail} alt={prod.title}/>
                        <span>{prod.title}</span>
                    </span>
                })
            }
        </div>
      }
      {
        products.length > 0 && <div className='pagination'>
            <span className={page > 1 ? "" : "pagination__disable"} onClick={() => selectedPage(page - 1)}>⬅️</span>
            {
                [...Array(products.length/10)].map((_, i) => {
                    return (
                        <span className={page === i+1 ? "pagination__selected" : ""} onClick={() => selectedPage(i+1)} key={i}>{i+1}</span>
                    )
                })
            }

            <span className={page < products.length / 10 ? "" : "pagination__disable"} onClick={() => selectedPage(page + 1)}>➡️</span>
        </div>
      }
    </div>
  )
}

export default Pagination
