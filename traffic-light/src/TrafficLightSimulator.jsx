import React, { use, useEffect, useState } from 'react'

function TrafficLightSimulator() {
    const [activeLight, setActiveLight] = useState("red");

    useEffect(() => {
        const cycle = ["red", "yellow", "green"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % cycle.length;
            setActiveLight(cycle[index]);
        }, 2000);

        return () => clearInterval(interval);
    }, [setInterval]);

    const getLightClass = (color) => {
        return `light ${color} ${activeLight === color ? "on" : ""}`;
    };
    return (
    <>
        <div style={{color: 'white', fontFamily: 'sans-serif'}} className='traffic-light'>
            <p>Traffic Light Simulator</p>
            <div style={{padding: 40, backgroundColor: '#3e4952', width: 50, height: 150, boxShadow: '0 0 10px black', borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <div style={{backgroundColor: 'gray', width: 50, height: 50, borderRadius: '50%'}} className={getLightClass("red")}></div>
                <div style={{backgroundColor: 'gray', width: 50, height: 50, borderRadius: '50%'}} className={getLightClass("yellow")}></div>
                <div style={{backgroundColor: 'gray', width: 50, height: 50, borderRadius: '50%'}} className={getLightClass("green")}></div>
            </div>
        </div>
    </>
  )
}

export default TrafficLightSimulator