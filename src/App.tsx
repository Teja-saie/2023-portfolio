import './App.css'
import { Route, Routes } from 'react-router'
import Home from './assets/Pages/Home'
import Resume from './assets/Pages/Resume'
import Contact from './assets/Pages/Contact'
import Menu from './assets/Components/Menu'
import { AnimatePresence,motion  } from "framer-motion"
import Loader from './assets/Components/Loader'
import { useEffect,useState } from 'react'

function App() {
  const [showLoader, setshowLoader] = useState<Boolean>(true)
  useEffect(()=>{setTimeout(()=>setshowLoader(false),1400)},[])

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
      {showLoader?<Loader/>:
      <>
      <Menu/>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </motion.div>
      </>
      }
      </AnimatePresence>
    </div>
  )
}

export default App
