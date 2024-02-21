import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const AppInfo = () => {
  const [email, setEmail] = useState('mechanifyemail@gmail.com');
  const [appLink, setAppLink] = useState('https://example.com/mechanify');
  const [newEmail, setNewEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAppLinkChange = (e) => {
    setAppLink(e.target.value);
  };

  const handleEmailUpdate = () => {
    if (newEmail) {
      setEmail(newEmail);
      setNewEmail('');
    }
  };

  const handleAppLinkUpdate = () => {
    // Add logic to update app link
    console.log('App link updated:', appLink);
  };

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header />


          <div className="container mx-auto py-8 w-3/4 shadow-lg rounded-lg bg-white -mt-8 p-5">
            <div className="p-600">
              <h1 className="text-2xl font-bold mb-4 bg-customBlue-700 p-2 text-white">App Info</h1>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Application Name:</h2>
                <p>Mechanify App</p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Version Number:</h2>
                <p>1.0.0</p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Description:</h2>
                <p>A feature-rich application for on road car repairing services.</p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Release Notes:</h2>
                <p>- Added new feature X</p>
                <p>- Fixed bug Y</p>
                <p>- Improved performance</p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Privacy Policy:</h2>
                <a href="/privacy" className="text-blue-500">Read our Privacy Policy</a>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Terms of Service:</h2>
                <a href="/terms" className="text-blue-500">Read our Terms of Service</a>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Permissions:</h2>
                <p>- Access camera</p>
                <p>- Access location</p>
                <p>- Access contacts</p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">App Share Link:</h2>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={appLink}
                    onChange={handleAppLinkChange}
                    className="mt-1 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <i
                    className="fa-solid fa-check ml-2 text-green-500 cursor-pointer"
                    onClick={handleAppLinkUpdate}
                  />
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Contact Email:</h2>
                <div className="flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="mt-1 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <i
                    className="fa-solid fa-check ml-2 text-green-500 cursor-pointer"
                    onClick={handleEmailUpdate}
                  />
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Copyright Information:</h2>
                <p>© 2024 Mechanify Inc. All rights reserved.</p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">Support Information:</h2>
                <p>Contact us at <a href={`mailto:${email}`} className="text-blue-500">{email}</a> for assistance.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Footer />

    </>
  );
};

export default AppInfo;
