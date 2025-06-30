import React from 'react'
const Card = ({icon1,followers,today,id,icon2}) => {
  return (
    <div className='h-50 w-50 p-4 border-2'>
      <div className='flex'>
        <img src={icon1} />
        <p>{id}</p>
      </div>
      <div>
        <h1>{followers}</h1>
        <h3>FOLLOWERS</h3>
      </div>
      <div>
        <p><img src={icon2} alt="" />{today} Today</p>
      </div>
    </div>
  )
}

export default Card
