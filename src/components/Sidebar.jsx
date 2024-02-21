import React from 'react'
import logo from '../assets/images/logo.png'
import { Link,useNavigate } from 'react-router-dom'

const Sidebar = ({ activeScreen}) => {

  // const navigate=useNavigate();

  // const handleLogout=()=>{
  //   navigate('/login')
  // }
  return (
    <div className='bg-white rounded-md  px-6 py-6 h-screen lg:h-screen lg:w-96'>
      <img src={logo} alt="Logo" width={100} className='ml-4 mb-6 lg:mb-0 lg:ml-20 lg:w-40 xl:w-32' />
      <ul className='mt-12'>
        <li>
          <Link to='/user'>
            <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
              <i className="fa-solid fa-users mr-3 text-2xl"></i>
              <p className='px-3 text-md font-bold'>Users</p>
            </div>
          </Link>
        </li>

        <li>
        <Link to='/services'>
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-wrench mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold'>Add New Service</p>
          </div>
          </Link>
        </li>
        <li>
        <Link to='/requests'>
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-arrow-circle-up mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold'>All Requests</p>
          </div>
          </Link>
        </li>
        <li>
        <Link to='/terms' >
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-file mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold'>Terms And Condition</p>
          </div>
          </Link>
        </li>
        <li>
        <Link to='/privacy'>
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-shield mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold'>Privacy Policy</p>
          </div>
          </Link>
        </li>
        <li>
        <Link>
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-headset mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold'>Help Support</p>
          </div>
          </Link>
        </li>
        <li>
       <Link to='/info'>
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-circle-info mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold'>App Info</p>
          </div>
          </Link>
        </li>
        <li>
        <Link to='/faqs'>
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-question-circle mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold'>Faqs</p>
          </div>
          </Link>
        </li>
     
        <li >
      <Link to='/'>
          <div className={`flex items-center p-3 ${activeScreen === 'user' ? 'bg-blue-500 text-white rounded-md border-2' : 'text-black'} hover:bg-customBlue hover:text-white hover:rounded-md`}>
            <i className="fa-solid fa-arrow-right-from-bracket mr-3 text-2xl"></i>
            <p className='px-3 text-md font-bold' >Log Out</p>
          </div>
          </Link>
        </li>
   
      </ul>
    </div>
  )
}

export default Sidebar
