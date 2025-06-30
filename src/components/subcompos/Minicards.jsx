import React from 'react'

const Minicards = ({icon, name, count, incordec, percent}) => {
  return (
    <div className='border-2 h-30 w-35 p-4 gap-4'>
      <div className='flex justify-around'>
        <p>{name}</p>
        <img height={"10px"} width={"10px"} src={icon}></img>
      </div>
      <div className='flex justify-between'>
        <h1>{count}</h1>
        <div className='flex '>
            <img className='h-1 mt-2' src={incordec}/>
            <p>{percent} %</p>
        </div>
      </div>
    </div>
  )
}

export default Minicards
