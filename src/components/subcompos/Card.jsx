import React, { useContext } from 'react'
import { Context } from '../../useContext'
const Card = ({followers,today,id}) => {
  const {fb,inc} = useContext(Context)

  return (
    <div className='h-50 w-50 p-4 border-2'>
      <div className='flex'>
        <img src={fb} />
        <p>{id}</p>
      </div>
      <div>
        <h1>{followers}</h1>
        <h3>FOLLOWERS</h3>
      </div>
      <div>
        <p><img src={inc} alt="" />{today} Today</p>
      </div>
    </div>
  )
}

export default Card
