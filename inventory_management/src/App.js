import Info from './info.js'
import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <p>Bare Bones App</p>
      <Info title="inventory"/>
      <ButtonState />

    </div>
  );
}

function ButtonState(){
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  const updateTitleOnClick = () => {
    setTitle('we have a title fom use state')
  }

  const updateCounterOnClick = () => {
    setCount(count + 1)
  }

  return(
    <>
    <Data title={title} count={count}/>
    <button onClick={updateTitleOnClick}>update Title</button>
    <button onClick={updateCounterOnClick}>update Counter</button>
    </>
    
  )
}


function Data(props) {
  return (
    <div>
    <p>Title: {props.title} </p>
    <p>Counter: {props.count}</p>
    </div>
  )
}

export default App;
