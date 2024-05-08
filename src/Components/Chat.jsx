import React, { useContext, useEffect, useState } from "react";
import cam from "../../public/images/cam.png";
import phone from "../../public/images/phone.png";
import more from "../../public/images/more.png";
import user from "../../public/images/user.jpg";
import Messages from "./Messages";
import Input from "./Input";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
 

  return (
    <div className="chat">
  {data.user === null ? (
    <>
      <div className="chatScreen">
        <div className="logoBox">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="promotion">
        <span>Download D-Chatz for Dating</span>
      </div>
    </>
  ) : (
    <>
      <div className="chatInfo">
        <div className="userInfo">
          <img className="userImg" src={data.user.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <img className="camIcon" src={cam} alt="" />
          <img className="phoneIcon" src={phone} alt="" />
          <img
            className="moreIcon"
            src={more}
            alt="more"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="dropdown-menu2">
              <ul>
                <li>View Contact</li>
                <li>Search</li>
                <li>More</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Messages />
      <Input />
    </>
  )}
</div>

  );
};

export default Chat;
