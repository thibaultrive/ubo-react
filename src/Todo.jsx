import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TodoItem from "./TodoItem";


export default () => {

    let [value, setValue] = useState("")
    let [items, setItems] = useState([])
    let [index, setIndex] = useState(0)

    // let [todo, setTodo] = useState({value: "", items: [], index: 0})

    let handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addItem()
        }
    }

    let addItem = () => {
        setItems(items.concat({id: index + 1, value}))
        setIndex(index + 1)
        setValue("")
    }

    let removeItem = (id) => {
        let k = items.findIndex(item => item.id === id)
        let newItems = [...items]
        let item = newItems.splice(k, 1)[0]
        setItems(newItems)
        setValue(item.value)
    }

    return (
        <div>
            {items.map(item => <TodoItem key={item.id} item={item} removeItem={removeItem}/>)}
            <div>
                <TextField name="value" label="Liste" value={value} onChange={handleChange} onKeyDown={handleKeyDown}
                           variant="outlined" className="form-element"/>
            </div>
            <Button variant="contained" color="primary" onClick={addItem}>Ajouter</Button>
        </div>
    )
}
