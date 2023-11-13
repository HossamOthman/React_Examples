import "./App.css";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import { useState, useEffect } from "react";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []});

  useEffect(()=> {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(data => {
        setData({ items: data})
      })
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data["items"];
    // item.id = items.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }

    fetch('http://localhost:3000/items', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({items: items});
      });

    
  }

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    }

    fetch(`http://localhost:3000/items/${item.id}`, requestOptions)
    .then(res => {
      if (res.ok) {
        const idx = items.indexOf(item);
        items.splice(idx, 1);
        setData({items: items});
      }
    })
  }

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if(filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if(filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if(filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if(filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }

    return filteredData;
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <AddItem addItem={addItemToData}/>
      </div>

      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters}/>
      </div>

      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])}
        deleteItem={deleteItem}/>
      </div>
    </div>
  );
}


export default App;
