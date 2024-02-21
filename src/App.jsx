import React ,{useState} from 'react'
import {BrowserRouter as Router, Routes, Route , Link, } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";



import Users from './Pages/Users'
import Faqs from './Pages/Faqs'
import AppInfo from './Pages/AppInfo'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsCondition from './Pages/TermsCondition'
import Services from './Pages/Services'
import Request from './Pages/Request'
import Suppprt from './Pages/Suppprt'
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Pages/Login';
// import Dashboard from './Pages/Dashboard';




const App = () => {
  
  return (


    <div>
      <Router>


      {/* <div className='flex'>
          <Sidebar/>

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header/>
          
      */}
        <Routes>
   
          <Route  path="/" element={<Login/>} />
          <Route  path="/user" element={<Users/>}/>
          <Route  path="/faqs" element={<Faqs />}/>
          <Route  path="/info" element={<AppInfo />}/>
          <Route  path="/privacy" element={<PrivacyPolicy />}/>
          <Route  path="/terms" element={<TermsCondition />}/>
          <Route  path="/services" element={<Services />}/>
          <Route  path="/requests" element={<Request />} />
          <Route  path="/support" element={<Suppprt />}/>
       

        </Routes>

{/*        
        </div>
        
        </div>
        <Footer/> */}

      </Router>
    </div>
  )
}

export default App
