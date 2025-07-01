// import React, { useContext } from 'react'
import Card from './subcompos/Card'
// import { props } from '../App'
const Home = () => {
  return (
    <div className='grid grid-cols-2 gap-y-2 md:grid-cols-4 md:gap-2'>
      <Card id="@nathanf"  today="12" followers="1987"></Card>
      <Card id="@nathanf"  today="12" followers="1987"></Card>
      <Card id="@nathanf"  today="12" followers="1987"></Card>
      <Card id="@nathanf"  today="12" followers="1987"></Card>
    </div>
  )
}

export default Home
