import React, { useContext, useState } from 'react'
import logo from '../../public/images/logo.png'
import cam from '../../public/images/cam.png'
import phone from '../../public/images/phone.png'
import more from '../../public/images/more.png'
import user from '../../public/images/user.jpg'
import Messages from './Messages'
import Input from './Input'
import { AuthContext } from '../Context/AuthContext'

const Chat = () => {
  const {currentUser} = useContext(AuthContext)
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='chat'>
        {/* <div className="chatScreen">
      <div className="logoBox">
        <img src={logo} alt="" />
        </div>
      </div>
      <div className="promotion">
        <span>Download D-Chatz for Dating</span>
      </div> */}
      <div className="chatInfo">
        <div className="userInfo">
        <img className='userImg' src={user} alt="" />
        <span>Devil</span>
        </div>
        <div className="chatIcons">
          <img className='camIcon' src={cam} alt="" />
          <img className='phoneIcon' src={phone} alt="" />
          
          <img className='moreIcon' src={more} alt="more" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="dropdown-menu2">
              <ul>
                <li>View Contact</li>
                <li>search</li>
                <li>more</li>
              </ul>
            </div>
          )}
        
        </div>
      </div>
      <Messages/>
      <Input/>
      
    </div>
    
  )
}

export default Chat
