import React from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  
  return (
    <>
     <div className='container'>
        <div className='header'>
            <h2>News API Application</h2>
        </div>

        <div className='content'>
            <Home/>
        </div>
        
     </div>
    </>
  )
}

export default App
