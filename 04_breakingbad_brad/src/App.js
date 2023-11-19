import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HeaderBB from './components/ux/HeaderBB'
import CharacterGrid from './components/characterSet/CharacterGrid'
import Search from './components/ux/Search'
import './App.css';




const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.github.com/users`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    
    fetchItems()
  }, [])

  return (
    <div className="container">
      <HeaderBB/>
      <Search/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
