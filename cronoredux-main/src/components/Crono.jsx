import React, { useEffect, useState } from 'react'

const Crono = () => {
    const [crono, setCrono] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() =>{
        let interval = null;
        if(running){
            interval = setInterval(() =>{
                setCrono((crono) => crono + 10);
            }, 10)
        }else{
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    },[running])

  return (
    <div>
        <h2>Mi Crono</h2>
        <h3>
            <span>{("0" + Math.floor((crono / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((crono / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((crono / 10) % 100)).slice(-2)}</span>
        </h3>

        {crono === 0 && !running && <button onClick={() => setRunning(true)} >Start</button>}
        {running && <button onClick={() => setRunning(false)} >Stop</button>}
        {crono > 0 && !running && (
            <>
                <button onClick={() => setRunning(true)} >Resume</button>
                <button onClick={() => setCrono(0)} >Reset</button>
            </>
        )}
        
    </div>
  )
}

export default Crono