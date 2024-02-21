import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const TermsCondition = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header />
          <Form Createheading='Create Terms and Condition' Editheading="Edit Terms and Condition" listHeading='All Terms and Condition' buttonCreate='Create' buttonUpdate='Update ' />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default TermsCondition
