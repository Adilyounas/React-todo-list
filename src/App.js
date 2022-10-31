import React, { useState, useEffect } from "react";
import "./App.css"
import Logo from "./Logo.png"
import { FcAddDatabase } from "react-icons/fc";
import { FcDeleteDatabase } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";

const getDataFromLocalStorage = () => {
  const list = localStorage.getItem("lists")
  if (!list) {

    return []
  } else {
    return JSON.parse(list)
  }
}

function App() {
  const [input, setInput] = useState("")
  const [ArrayData, setArrayData] = useState(getDataFromLocalStorage())
  const [toggle, setToggle] = useState(true)
  const [isEditItem, setIsEditItem] = useState(null)




  function addItem() {
    if (!input) {
      alert("Enter Item Name")
    } else if (input && !toggle) {
      setArrayData(
        ArrayData.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: input }
          }
          return elem
        })
      )

      setToggle(true)
      setInput("")
      setIsEditItem(null)
    } else {
      const AllData = { id: new Date().getTime().toString(), name: input }
      setArrayData([...ArrayData, AllData])
      setInput("")

    }
  }

  function deleteItem(id) {
    const clearList = ArrayData.filter((ele) => {
      return ele.id !== id
    })

    setArrayData(clearList)
  }

  function clearAllItems() {
    setArrayData([])
  }

  function editItem(id) {
    const editItems = ArrayData.find((element) => {
      return element.id === id
    })
    setInput(editItems.name)
    setToggle(false)
    setIsEditItem(id)

  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(ArrayData))
  }, [input])




  return (
    <>
      <div className="main_container">
        <div className="container">
          <figure>
            <img src={Logo} width="130px" />
            <figcaption className="add_items">Add Items</figcaption>
          </figure>

          <div className="input_icons">
            <input type="text" className="inputField" value={input} onChange={(e) => setInput(e.target.value)} />

            {
              toggle ? <FcAddDatabase className="icon_size add_icon" onClick={addItem} /> :
                <FiEdit3 className="icon_size3" onClick={addItem} />
            }

          </div>






          {
            ArrayData.map((element) => {
              return (
                <>
                  <div className="show_items" key={element.id}>
                    <h3 className="item">{element.name} </h3>
                    <div className="addandedit_item">
                      <FiEdit3 className="icon_size2" onClick={() => editItem(element.id)} />
                      <FcDeleteDatabase className="icon_size delete_icon" onClick={() => deleteItem(element.id)} />

                    </div>
                  </div>

                </>
              )
            })
          }






          <button onClick={clearAllItems} className="clearbtn">Clear All</button>


        </div>
      </div>
    </>
  )
}

export default App;