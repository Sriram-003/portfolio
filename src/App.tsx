import './App.css'

import Home from './components/home'
import Navbar from './components/navbar'
import Skills from './components/skills'
import Project from './components/projects'
import Contact from './components/contact'
import './index.css'


function App() {

  return (
    <>
    <Navbar />
       <Home />
       <Skills />
       <Project />
       <Contact />
    </>
  )
}

export default App
