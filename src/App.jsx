// import { useState } from 'react'
import fb from './assets/icon-facebook.svg'
import inc from './assets/icon-up.svg'
import Home from './components/Home'
import Header from './components/Header'
import Overview from './components/Overview'

import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home icon1={fb} icon2={inc}></Home>
      <Overview icon1={fb} icon2={inc}></Overview>
    </>
  )
}

export default App
