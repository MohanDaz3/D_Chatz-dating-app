import React from 'react'
import userImg from '../../public/images/user.jpg'

const Chats = () => {
  return (
    <div className='chats'>
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

export default Chats
