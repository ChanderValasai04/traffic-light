import React from 'react'

// This component is a placeholder for the Traffic Light Simulator
function TrafficLightSimulator() {
  return (
    <>
        <div style={{color: 'white', fontFamily: 'sans-serif'}} className='traffic-light' >
            <p>Traffic Light Simulator</p>
            <div style={{padding: 40, backgroundColor: '#3e4952', width: 50, height: 150, boxShadow: '0 0 10px black', borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <div style={{backgroundColor: 'gray', width: 50, height: 50, borderRadius: '50%', }}></div>
                <div style={{backgroundColor: 'gray', width: 50, height: 50, borderRadius: '50%', }}></div>
                <div style={{backgroundColor: 'gray', width: 50, height: 50, borderRadius: '50%', }}></div>
            </div>
        </div>
    </>
  )
}

export default TrafficLightSimulator