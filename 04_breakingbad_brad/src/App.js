import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HeaderBB from './components/ux/HeaderBB'
import './App.css';




const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.github.com/users`)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <HeaderBB/>
    </div>
  );
}

export default App;
