import React from 'react';

const Table = ({ users, heading, requests, activeScreen }) => {
  return (
    <div className="container mx-auto -mt-16 p-5 border shadow-2xl mb-10 rounded-md bg-white" style={{ width: '90%' }}>
      <h1 className="text-black text-2xl p-3">{heading}</h1>
      <div className="overflow-x-auto">
        {activeScreen === 'users' && (
          <table className="table-auto w-full border-collapse text-center">
            <thead className="bg-customBlue-700 text-white">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Number</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-4">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.number}</td>
                  <td className="px-4 py-2">{user.location}</td>
                  <td className="px-4 py-2">{user.status}</td>
                  <td className="px-4 py-2">
                    <i className="fas fa-edit text-customBlue mr-2 hover:text-green-700" />
                    <i className="fas fa-trash text-customBlue mr-2 hover:text-red-700" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeScreen === 'requests' && (
          <table className="table-auto w-full border-collapse text-center">
            <thead className="bg-customBlue-700 text-white">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Mechanic Name</th>
                <th className="px-4 py-2">Requestor Name</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Service Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Charges</th>
              </tr>
            </thead>
            <tbody>
              {requests && requests.map((request) => (
                <tr key={request.id}>
                  <td className="px-4 py-2">{request.id}</td>
                  <td className="px-4 py-2">{request.status}</td>
                  <td className="px-4 py-2">{request.mechanicName}</td>
                  <td className="px-4 py-2">{request.requestorName}</td>
                  <td className="px-4 py-2">{request.location}</td>
                  <td className="px-4 py-2">{request.serviceName}</td>
                  <td className="px-4 py-2">{request.description}</td>
                  <td className="px-4 py-2">{request.charges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
