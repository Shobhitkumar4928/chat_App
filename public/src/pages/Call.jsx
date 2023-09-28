import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Call () {

    const {roomID}= useParams();
   
 

    let myMeeting = async(element) =>{
        const appID= 1724927925;
        const serverSecret= "374005d277587a236fd23b4db7246772";
        const userID = Math.floor(Math.random() * 10000) + "";
        const userName = "userName" + userID;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,userID,userName);
        const zp= ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });

    };
    return (<div>
       <div ref={myMeeting}/> 
        </div>
    )

}

export default Call;
