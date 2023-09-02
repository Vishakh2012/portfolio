import './App.css'
import Navbar from './components/Navbar'
import Project from './pages/Project'
import Semi from './components/Semi'
import Contacts from './pages/Contacts'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Semi/>
      <Project/>
      <Contacts/>
    </>

  )
}

export default App
