import { useState } from 'react'
import View from './components/View'
import Register from './components/Register'
import Delete from './components/Delete'
import Update from './components/Update'
import './App.css'

function App() {

  return (
  <>
  <View/>
  {/* <Register/> */}
  <Update/>
  <Delete/>
  </>
  )
}

export default App
