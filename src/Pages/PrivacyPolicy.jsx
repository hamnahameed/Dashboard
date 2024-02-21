import React, { useState } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const PrivacyPolicy = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header />
          <Form Createheading='Create Privacy Policy' Editheading="Edit Policy" listHeading='All Policies' buttonCreate='Create Policy' buttonUpdate='Update Policy' />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy;
