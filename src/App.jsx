import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accordion from './components/Accordion'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/accordion" element={<Accordion/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
