import React, { useEffect, useState } from 'react'
import axios from "axios";


const Veggies = () => {

    //state
    const [veggies, setVeggies] = useState([])



//useEffect
    useEffect(()=>{
        axios({
            method: "GET",
            url: "/server/veggies"
        }).then((res)=>{
            setVeggies(res.data);
        })
        console.log('Veggies component did mount')

    },[])
  return (
    <div>
        {veggies.map((veggie)=>{
            return <div key={veggie._id}>{veggie.name}</div>
        })}
      
    </div>
  )
}

export default Veggies
