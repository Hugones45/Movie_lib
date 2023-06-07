import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from "../src/pages/Home"
import { Movie } from "../src/pages/Movie"
import { Search } from "../src/pages/Search"

import App from './App.jsx'


import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Popular } from './pages/Popular'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<App />}>

          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
          <Route path='popular' element={<Popular />} />

        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

