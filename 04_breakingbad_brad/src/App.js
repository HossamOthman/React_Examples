import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HeaderBB from './components/ux/HeaderBB'
import CharacterGrid from './components/characterSet/CharacterGrid'
import Search from './components/ux/Search'
import './App.css';




const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.github.com/users${query == '' ? '' : '/' + query}`)
      
      setItems(result.data)
      setIsLoading(false)
    }

    
    fetchItems()
  }, [query])
  console.log(query)
  return (
    <div className="container">
      <HeaderBB/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
