import React from 'react'
import { useReducer, useState } from 'react'


const initialState = { todos: []}

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { todos: [...state.todos, { id: Date.now(), text: action.payload }] };
        case 'remove':
            return { todos: state.todos.filter(todo => todo.id !== action.payload.id) };
        default:
            break;
    }
}


function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState('');


    function handleAdd() {
        dispatch({ type: 'add', payload: text });
        setText('');
    }

    function handleRemove(todo) {
        dispatch({ type: 'remove', payload: todo });
    }

    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
          <input type="text" value={text} onChange={handleTextChange} />
          <button onClick={handleAdd}>Add Todo</button>
          <ul>
            {state.todos.map(todo => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => handleRemove(todo)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default UseReducerHook