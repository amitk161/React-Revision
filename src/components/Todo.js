import {React, useEffect, useState} from 'react'

const getItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
    
    if(list){
        return JSON.parse(localStorage.getItem("lists"));
    } else {
        return [];
    }
}

function Todo() {
    const [inputData, setInputData] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [items, setItems] = useState(getItems());
    const [isEditItem, setIsEditItem] = useState(null)

    const addItem = () => {
        if(!inputData){
            alert("Cannot add empty data!")
        } else if(inputData && !toggleSubmit){
            setItems(
                items.map((ele) => {
                    if(ele.id === isEditItem){
                        return {...items, name: inputData}
                    }
                    return ele
                })
            )
            setInputData('');
            setIsEditItem(null);
            setToggleSubmit(true);
        } else {
            const allInputData = {id: new Date().getTime(), name: inputData}
            setItems([...items, allInputData]);
            setInputData('');
        }
        
    }

    const deleteItem = (index) => {
        const updatedItems = items.filter((ele) => {
            return index !== ele.id
        })
        setItems(updatedItems);
    }

    const editItem = (index) => {
        let newEdit = items.find((ele) => {
            return index === ele.id;
        })
        setIsEditItem(index);
        setInputData(newEdit.name);
        setToggleSubmit(false)
    }

    const removeAll = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items));
    }, [items])

  return (
    <>
      <div>
        <div>
            <figure>
                <img alt="todo_img" />
                <figcaption>Add you list here</figcaption>
            </figure>

            <div>
                <input type="text" placeholder='Add items...' value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                {toggleSubmit ? <button onClick={addItem}>Add</button> : <button onClick={addItem}>Update</button>}
            </div>
            
            <div>
                {items.map((ele) => {
                    return (
                        <div key={ele.id}> 
                            <h3>{ele.name}</h3>

                            <div>
                                <button onClick={() => editItem(ele.id)}>Edit</button>
                                <button onClick={() => deleteItem(ele.id)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button onClick={removeAll}>Remove All</button>

        </div>
      </div>
    </>
  )
}

export default Todo
