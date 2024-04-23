import React from 'react'
import more from '../../public/images/more.png'
import user from '../../public/images/user.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="title">chats</span>
      <div className="user">
        <img className='userImg' src={user} alt="user" />
        <img className='more' src={more} alt="more" />
      </div>
    </div>
  )
}

export default Navbar
