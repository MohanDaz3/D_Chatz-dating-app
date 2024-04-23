import React from 'react'
import userImg from '../../public/images/user.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src={userImg} alt="" />
        <div className="userChatInfo">
          <span>Devil</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search
