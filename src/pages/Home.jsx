import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import logo from '../../public/images/logo.png'
import connect from '../../public/images/connect.png'

const Home = () => {
  return (
    <div className='home'>
      
      <div className='head'>
      <img className='logo' src={logo} alt="" />
      <span className='motto' >Where People Connect Peoples...</span>
      <img className='connect' src={connect} alt="" />
      </div>
        
      <div className="container">
        
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
