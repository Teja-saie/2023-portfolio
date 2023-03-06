import './App.css'
import { Route, Routes } from 'react-router'
import Home from './assets/Pages/Home'
import Resume from './assets/Pages/Resume'
import Contact from './assets/Pages/Contact'
import Menu from './assets/Components/Menu'
import { AnimatePresence,motion  } from "framer-motion"

function App() {

  return (
    <div className="App">
      <Menu/>
      <AnimatePresence mode='wait'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
