
import './App.css';

// import nature from'./components/image/nature.jpg'


import {useState,react} from 'react'
// import {ImagesList} from './components/Image'
// import Userget from './components/Userget'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parms from './components/Params'
import Form from'./components/Form'









function App() {
  

    return (
      <>

      
     <Form/>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Parms />}>

            
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>)
  }
 


export default App;
