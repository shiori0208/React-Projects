import React from 'react'
import {useParams} from "react-router-dom"
import Github from '../Github/Github'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-orange-500 text-black text-3xl text-center py-5'>Userid:{userid}</div>
  )
}

export default User