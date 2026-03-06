import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function GitHub() {
    const data = useLoaderData()
    // const [data , setData]  = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ankittkr')
    //     .then(res => res.json())
    //     .then(data =>  setData(data))
    // } , [])
    // console.log(data);
    
  return (
    <div>GitHub follwers : {data.followers} 
        <img src={data.avatar_url} alt="avatar" />
        </div>
  )
}

export default GitHub

export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/Ankittkr')
    return res.json(); 
}