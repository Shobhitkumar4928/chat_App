import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Call () {

    const {roomID}= useParams();
   
 

    let myMeeting = async(element) =>{
        const appID= 1724927925;
        const serverSecret= "374005d277587a236fd23b4db7246772";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString());
        const zp= ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });

    };
    return (<div>
         ref={myMeeting}
        </div>
    )

}

export default Call;
