import './App.css'
import { Route, Routes } from 'react-router'
import Home from './assets/Pages/Home'
import Resume from './assets/Pages/Resume'
import Contact from './assets/Pages/Contact'
import Menu from './assets/Components/Menu'
import { AnimatePresence,motion  } from "framer-motion"
import Loader from './assets/Components/Loader'
import { useEffect,useState } from 'react'
import Hamberger from './assets/Components/Hamberger'

function App() {
  const [showLoader, setshowLoader] = useState<Boolean>(true)
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{setTimeout(()=>setshowLoader(false),200)},[])

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
      {showLoader?<Loader/>:
      <>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Hamberger isOpen={isOpen} setIsOpen={setIsOpen}/>
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
