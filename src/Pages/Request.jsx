import React from 'react'
import Table from '../components/Table';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Request = () => {
  const requests = [
    { id: 1, status: 'Pending', mechanicName: 'John Doe', requestorName: 'Alice Johnson', location: '123 Main St', serviceName: 'Oil Change', description: 'Needs oil change', charges: '$50' },
    { id: 2, status: 'Complete', mechanicName: 'Jane Smith', requestorName: 'Bob Johnson', location: '456 Elm St', serviceName: 'Brake Repair', description: 'Brakes need fixing', charges: '$100' },
    { id: 3, status: 'Cancelled', mechanicName: 'John Doe', requestorName: 'Alice Johnson', location: '123 Main St', serviceName: 'Oil Change', description: 'Needs oil change', charges: '$50' },
    { id: 4, status: 'Complete', mechanicName: 'Jane Smith', requestorName: 'Bob Johnson', location: '456 Elm St', serviceName: 'Brake Repair', description: 'Brakes need fixing', charges: '$100' },
    { id: 5, status: 'Cancelled', mechanicName: 'John Doe', requestorName: 'Alice Johnson', location: '123 Main St', serviceName: 'Oil Change', description: 'Needs oil change', charges: '$50' },
    { id: 6, status: 'Complete', mechanicName: 'Jane Smith', requestorName: 'Bob Johnson', location: '456 Elm St', serviceName: 'Brake Repair', description: 'Brakes need fixing', charges: '$100' },

  ];

  const activeScreen = 'requests';

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header />
          <Table requests={requests} heading='All  Requests' activeScreen={activeScreen} />

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Request
