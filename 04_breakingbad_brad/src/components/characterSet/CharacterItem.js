import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={item.avatar_url} alt='' />
      </div>
      <div className='card-back'>
        <h1>{item.login}</h1>
        <ul>
          <li>
            <strong>User Node Id:</strong> {item.node_id}
          </li>
          <li>
            <strong>User Id:</strong> {item.id}
          </li>
          <li>
            <strong>User URL:</strong> {item.html_url}
          </li>
          <li>
            <strong>Status:</strong> {item.type}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default CharacterItem
