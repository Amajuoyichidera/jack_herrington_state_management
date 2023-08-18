import React from 'react'
import { useState } from 'react'

function UseStateHook() {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [fruit, setFruits] = useState(['apple', 'banana'])
    const [select, setSelect] = useState()
    
    function addItem() {
        setList([...list, name])
        setName('')
    }
  return (
    <div>
       <input value={name} onChange={(e) => setName(e.target.value)} />
       <button onClick={addItem}>Add item</button>

       {list.map(item => (
        <ol key={item}>
            <li>{item}</li>
        </ol>
       ))}

       {fruit.map(item => (
        <div>
          {item}
          <button onClick={() => setSelect(item)}>select</button>
        </div>
        
       ))}
       <h1>You choosed: {select}</h1>
    </div>
  )
}

export default UseStateHook