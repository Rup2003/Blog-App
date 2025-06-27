import React from 'react'
import {Routes, Route} from "react-router"
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'

export const App = () => {
  return (
    <Routes>
      <Route path= "/" element={<HomePage/>} />
      <Route path= "/profile" element={<ProfilePage/>} />
      <Route path= "/blogCreation" element={<h1>create blog</h1>} />
      <Route path= "/login" element={<LoginPage/>} />
      <Route path= "/register" element={<RegisterPage/>} />
    </Routes>
  )
}
