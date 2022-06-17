import axios from 'axios';
import React, { useEffect, useState } from 'react'

const People = () => {

    const [people, setPeople] = useState([]);
    const [render,setRender] = useState(1)

     const getPeople = async() =>{
        const res = await axios("https://ghibliapi.herokuapp.com/people");
        console.log(res);
        setPeople(res.data)
     }

     useEffect(() => {
         getPeople();
         console.log("hola")
     },[render])
  return (
    <div>
        <button onClick={() => setRender(render+1)}>Render</button>
        {people.length > 0 && people.map((people) => {return (<>
            <p>{people.name}</p>
        </>)})}
    </div>
  )
}

export default People