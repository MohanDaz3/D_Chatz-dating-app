import React from 'react'
import User from '../../public/images/user.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={User} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={User} alt="" />
      </div>
    </div>
  )
}

export default Message
