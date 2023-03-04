import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './assets/Pages/Home'
import Resume from './assets/Pages/Resume'
import Contact from './assets/Pages/Contact'
import Menu from './assets/Components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
