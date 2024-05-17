import React from 'react'
import Navbar from './components/common/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Footer from './components/common/Footer'
import Signup from './pages/Signup'

import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import CreateProject from './pages/CreateProject'
import { NavbarDemo } from './components/NavbarDemo'
function App() {
  return (
    <div className="App">
     <NavbarDemo/>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/dashboard/my-profile' element={<Myprofile/>}>
  </Route>
    <Route path='/dashboard/create-project' element={<CreateProject/>}></Route>
</Routes>

<Footer/>
    </div>
  );
}

export default App;
