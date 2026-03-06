import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export const Profile = () => {

    const {user}  = useContext(UserContext)
    if(!user) return <h1>User not Login !!!</h1>
  return (
    <div>
        <h1>Profile : </h1>
        <div>
           hi, Welcome back {user.username}!!
        </div>
    </div>
  )
}
