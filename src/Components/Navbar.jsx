import React, { useContext, useState } from 'react'
import more from '../../public/images/more.png'
import user from '../../public/images/user.jpg'
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <span className="title">Chats</span>
      <div className="user">
        <img className='userImg' src={currentUser.photoURL} alt="user" />
        <div className="dropdown">
          <img className='more' src={more} alt="more" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li onClick={()=>signOut(auth)}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar
