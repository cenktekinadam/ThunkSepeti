import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Cart from './pages/Cart'
import Header from './components/Header'
import Restorant from './pages/Restorant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCart } from './redux/actions/basketActions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCart())
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/restourants/:id' element={<Restorant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
