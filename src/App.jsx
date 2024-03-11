import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Contact } from './Components/Contact'
import Notification from './Components/Notification'
import Findjob from './Components/Findjob'
import { Forms } from './Components/Forms'
import Logins from './Components/Logins'
import It from './Components/It'
import Bpo from './Components/Bpo'
import Sale from './Components/Sale'
import Customer from './Components/Customer'
import Account from './Components/Account'
import DigitalMarketing from './Components/DigitalMarketing'
import Healthcare from './Components/Healthcare'
import Miscellaneous from './Components/Miscellaneous'
import Manifacturing from './Components/Manifacturing'
import Skin from './Components/Skin'
import Humanresource from './Components/Humanresource'
import Operation from './Components/Operation'


function App() {
    const[userloggedin,setUserloggedin] = useState(false);
    const[token,setToken] = useState(localStorage.getItem('authToken'))
    console.log("token : ",token)
  return (
  <div>
    <Navbar userloggedin={userloggedin} token={token}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/logs' element={<Logins setUserloggedin={setUserloggedin} setToken={setToken}/>}/>
      <Route path='/jobs' element={<Findjob/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/notification' element={<Notification/>}/>
    <Route path='/It' element={<It/>}/>
    <Route path='/Bpo' element={<Bpo/>}/>
    <Route path='/Sale' element={<Sale/>}/>
    <Route path='/Cs' element={<Customer/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path='/Digital' element={<DigitalMarketing/>}/>
    <Route path='/Health' element={<Healthcare/>}/>
    <Route path='/Ms' element={<Miscellaneous/>}/>
    <Route path='/Manifcutre' element={<Manifacturing/>}/>
    <Route path='/Skin' element={<Skin/>}/>
    <Route path='/Hr' element={<Humanresource/>}/>
  <Route path='/Operation' element={<Operation/>}/>
   
    </Routes>
  </div>
  )
}

export default App
