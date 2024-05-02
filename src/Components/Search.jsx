import React, { useState } from 'react'
import userImg from '../../public/images/user.jpg'
import {collection,query,where,getDocs,setDoc,doc,updateDoc,serverTimestamp,getDoc,} from "firebase/firestore";
import {db} from '../Firebase';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const Search = () => {
  const[username,setUsername] = useState("")
  const[user,setUser] = useState(null)
  const[err,setErr] = useState(false)

const{currentUser} = useContext(AuthContext)

const handleSearch = async() =>{
const q = query(collection(db,"users"),
where("displayName","==",username)
);
try {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    setUser(doc.data())
  })
} catch (error) {
  setErr(true)
}
}

const handlekey = (e)=>{
  e.code === "Enter" && handleSearch()
}

  const handleSelect = async()=>{
    // check whether the group(chats in firesotre)exists,if not created
    const combinedId = currentUser.uid>user.id?currentUser.uid +user.id:user.id + currentUser.uid

    try {
      const res = await getDoc(doc(db,"chats",combinedId))

      if(!res.exists()){
        // create chat in chats 
        await setDoc(doc(db,"chats",combinedId,{messages:[]} ))

        // create user chats
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]:serverTimestamp(),
        })

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      
    }
    setUser(null)
    setUsername("")
  }
  
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'onKeyDown={handlekey} onChange={(e) => setUsername(e.target.value)} value={username}/>
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
