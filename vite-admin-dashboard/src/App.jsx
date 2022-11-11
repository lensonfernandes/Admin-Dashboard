import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./assets/scss/app.scss";
import Dashboard from '../pages/Dashboard';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <Router>
      <div className='main-content'> 
        <div className='page-content'>
          <Dashboard/>
        </div>
      </div>
        
    </Router>   
     
    </>
  )
}

export default App
