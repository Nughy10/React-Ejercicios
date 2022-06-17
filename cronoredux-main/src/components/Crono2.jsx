import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';

const Crono2 = () => {
    const dispatch = useDispatch();                         // es una forma distinta para obtener el dispatch en vez de usar connect
    const {crono, running} = useSelector(state => state)    // es otra forma distinta a connect para obtener datos de mi store

    useEffect(() =>{
        let interval = null;
        if(running){
            interval = setInterval(() =>{
                dispatch({type: 'addTime', payload: 10})
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



        {crono === 0 && !running && <button onClick={() => dispatch({type:'start'})} >Start</button>}
        {running && <button onClick={() => dispatch({type:'stop'})} >Stop</button>}
        {crono > 0 && !running && (
            <>
                <button onClick={() => dispatch({type:'resume'})} >Resume</button>
                <button onClick={() => dispatch({type:'reset'})} >Reset</button>
            </>
        )}
        
    </div>
  )
}

export default Crono2;