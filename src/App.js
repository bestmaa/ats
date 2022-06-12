import React from 'react'
import { useParams } from 'react-router-dom'

function App() {
  const {any}=useParams()
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App