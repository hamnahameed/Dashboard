import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Table from '../components/Table'

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', number: '123-456-7890', location: 'xxxyyyxxzzzzzzzzzzzzzz', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', number: '456-789-0123', location: 'xxxyyyxxzzzzzzzzzzzzzz', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', number: '789-012-3456', location: 'xxxyyyxxzzzzzzzzzzzzzz', status: 'Active' },
    { id: 4, name: 'John Doe', email: 'john@example.com', number: '123-456-7890', location: 'xxxyyyxxzzzzzzzzzzzzzz', status: 'Active' },
    { id: 5, name: 'Jane Smith', email: 'jane@example.com', number: '456-789-0123', location: 'xxxyyyxxzzzzzzzzzzzzzz', status: 'Inactive' },
    { id: 6, name: 'Alice Johnson', email: 'alice@example.com', number: '789-012-3456', location: 'xxxyyyxxzzzzzzzzzzzzzz', status: 'Active' },
  ];

  const activeScreen = 'users';

  return (

    <>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header />

          <Table users={users} heading='Users' activeScreen={activeScreen} />
        </div>

      </div>
      <Footer />
    </>

  )
}

export default Users
