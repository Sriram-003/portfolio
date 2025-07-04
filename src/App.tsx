import './App.css'

import Home from './components/home'
import Navbar from './components/navbar'
import Skills from './components/skills'
import Project from './components/projects'
import Contact from './components/contact'
import './index.css'
import About from './components/about'
import Certificates from './components/certificate'


function App() {

  return (
    <div className='bg-gray-100'>
    <Navbar />
       <Home />
       <About />
       <Skills />
       <Project />
     
       <Contact />
    </div>
  )
}

export default App
