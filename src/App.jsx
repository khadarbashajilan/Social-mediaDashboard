// import { useState } from 'react'
import fb from './assets/icon-facebook.svg'
import inc from './assets/icon-up.svg'
import Home from './components/Home'
import Header from './components/Header'
import Overview from './components/Overview'
import { Context } from './useContext'
import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Context.Provider value={{fb,inc}}>
      <Header></Header>
      <Home ></Home>
      <Overview></Overview>
        </Context.Provider>
    </>
  )
}

export default App
