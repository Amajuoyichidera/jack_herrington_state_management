import './App.css';
import UseStateHook from './components/UseStateHook'
import useCounterCustomHook from './useCounterCustomHook';
import useFetch from './useFetch';
import { createContext } from 'react';
import ContextApi from './components/ContextApi';
import UseReducerHook from './components/UseReducerHook';

export const MyContext = createContext()

function App() {
 const [count, increase, decrease] = useCounterCustomHook(0)
 const [list, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/posts');

 
 if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}
const name = {
  'name': 'david',
  'age': 19
}

  return (
    <div className="App">
      <UseReducerHook />
     <UseStateHook />
     <MyContext.Provider value={name}>
     <ContextApi />
     </MyContext.Provider>
     
     <p>Count: {count}</p>
     <button onClick={increase}>increase</button>
     <button onClick={decrease}>decrease</button>

     {list.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
     ))}
    </div>
  );
}

export default App;
