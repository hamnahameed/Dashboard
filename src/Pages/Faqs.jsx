import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [currentFaq, setCurrentFaq] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    if (editMode && currentFaq) {
      const updatedFaqs = faqs.map((faq) =>
        faq === currentFaq ? { ...faq, question, answer } : faq
      );
      setFaqs(updatedFaqs);
    } else {
      setFaqs([...faqs, { id: Date.now(), question, answer }]);
    }
    setQuestion('');
    setAnswer('');
    setCurrentFaq(null);
    setEditMode(false);
    setShowModal(false);
  };

  const handleEdit = (faq) => {
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setCurrentFaq(faq);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (faq) => {
    const updatedFaqs = faqs.filter((f) => f.id !== faq.id);
    setFaqs(updatedFaqs);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (

    <>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header />

          <div className="container -mt-8 mx-auto w-3/4 bg-white shadow-xl p-5 rounded-md">
            <h1 className="text-2xl font-bold my-4 bg-customBlue-700 text-white p-3">Frequently Asked Questions</h1>

            <div className="flex justify-end mb-4">
              <button
                className="px-4 py-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                onClick={openModal}
              >
                <i className="fas fa-plus mr-2"></i>Add New Faq
              </button>
            </div>

            {showModal && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white shadow-lg rounded p-6 w-3/4">
                  <h2 className="text-xl font-semibold bg-blue-500 p-3 text-white">
                    {editMode ? 'Edit FAQ' : 'Add New FAQ'}
                  </h2>
                  <div className="mt-4">
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                      Question:
                    </label>
                    <input
                      type="text"
                      id="question"
                      className="mt-1 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                      Answer:
                    </label>
                    <textarea
                      id="answer"
                      className="mt-1 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      rows={5}
                    />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                      onClick={handleSave}
                    >
                      {editMode ? 'Save Changes' : 'Add FAQ'}
                    </button>
                    <button
                      className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 divide-y divide-gray-200 bg-customBlue">
              {faqs.map((faq) => (
                <div key={faq.id} className="py-4">
                  <div
                    className="cursor-pointer flex items-center justify-between"
                    onClick={() => setCurrentFaq(faq.id === currentFaq ? null : faq.id)}
                  >
                    <div className="text-lg font-semibold">{faq.question}</div>
                    <div>
                      {faq.id === currentFaq ? (
                        <i
                          className="fa-solid fa-angle-down text-white mr-2 hover:text-green-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentFaq(null);
                          }}
                        />
                      ) : (
                        <i
                          className="fa-solid fa-angle-up text-white mr-2 hover:text-green-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentFaq(faq.id);
                          }}
                        />
                      )}
                      <i className="fas fa-edit text-white mr-2 hover:text-green-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(faq);
                        }}
                      />
                      <i
                        className="fas fa-trash text-white mr-2 hover:text-red-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(faq);
                        }}
                      />
                    </div>
                  </div>
                  {faq.id === currentFaq && (
                    <div className="text-white mt-2">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
      <Footer />

    </>
  );
};

export default Faqs;
