import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { incrementCrono, resetCrono } from '../redux/crono/crono.actions';
import { startCrono, stopCrono } from '../redux/running/running.actions';

const Crono3 = () => {
    const dispatch = useDispatch();                         // es una forma distinta para obtener el dispatch en vez de usar connect
    const {crono} = useSelector(state => state.crono)    // es otra forma distinta a connect para obtener datos de mi store
    const {running} = useSelector(state => state.running)    // es otra forma distinta a connect para obtener datos de mi store


    useEffect(() =>{
        let interval = null;
        if(running){
            interval = setInterval(() =>{
                dispatch(incrementCrono())
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



        {crono === 0 && !running && <button onClick={() => dispatch(startCrono())} >Start</button>}
        {running && <button onClick={() => dispatch(stopCrono())} >Stop</button>}
        {crono > 0 && !running && (
            <>
                <button onClick={() =>dispatch(startCrono())} >Resume</button>
                <button onClick={() => dispatch(resetCrono())} >Reset</button>
            </>
        )}
        
    </div>
  )
}

export default Crono3;