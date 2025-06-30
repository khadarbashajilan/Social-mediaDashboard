import React from 'react'
import Minicards from './subcompos/Minicards'
const Overview = ({fb,inc}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
        <Minicards icon={fb} name="Page Views" count="87" incordec={inc} percent="303"></Minicards>
        <Minicards icon={fb} name="Page Views" count="87" incordec={inc} percent="303"></Minicards>
        <Minicards icon={fb} name="Page Views" count="87" incordec={inc} percent="303"></Minicards>
        <Minicards icon={fb} name="Page Views" count="87" incordec={inc} percent="303"></Minicards>
    </div>
  )
}

export default Overview
