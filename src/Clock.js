import React from "react";
import { useState, useEffect } from 'react';

function Clock({time,setTime}) {

    useEffect(() => {
      const intervalID = setInterval(() => {
        setTime(new Date());
      }, 1000);//1초마다 반복
      return () => clearInterval(intervalID);
      
    }, []);
  
    return (
        <>
            <div>{time.toLocaleString()}</div>
        </>
    );
  }

  export default Clock;