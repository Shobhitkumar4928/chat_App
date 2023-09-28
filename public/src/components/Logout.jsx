import React from "react";
import {useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
import { BsDisplay } from "react-icons/bs";
export default function Logout() {
  const navigate = useNavigate();
  const [roomID,setRoomID]= useState();

  const handleVideoCallClick =() => {
    navigate(`/call/${roomID}`);
  };
    
 


  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <>
    <div style={{display:'flex'}}>
      <div style={{ marginRight: '10px'}}>
      <div className='App'>
   <input placeholder="Enter Room ID" type='text' value={roomID} onChange={(e)=>setRoomID(e.target.value)} 
   ></input>
   <button onClick={handleVideoCallClick}>Join</button>
</div>
      </div>

      <div>
      <Button 
       onClick={handleClick}>
      <BiPowerOff /> 
    </Button>
      </div>
    </div>

    </>

    
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
