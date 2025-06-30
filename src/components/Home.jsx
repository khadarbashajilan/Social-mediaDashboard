import React from 'react'
import Card from './subcompos/Card'
const Home = ({fb,inc}) => {
  return (
    <div className='grid grid-cols-2 gap-y-2 md:grid-cols-4 md:gap-2'>
      <Card icon1={fb} id="@nathanf" icon2={inc} today="12" followers="1987"></Card>
      <Card icon1={fb} id="@nathanf" icon2={inc} today="12" followers="1987"></Card>
      <Card icon1={fb} id="@nathanf" icon2={inc} today="12" followers="1987"></Card>
      <Card icon1={fb} id="@nathanf" icon2={inc} today="12" followers="1987"></Card>
    </div>
  )
}

export default Home
