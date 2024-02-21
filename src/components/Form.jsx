import React, { useState } from 'react';

const Form = ({ Createheading,listHeading, buttonCreate, buttonUpdate, Editheading }) => {
  const [policies, setPolicies] = useState([]);
  const [currentPolicy, setCurrentPolicy] = useState(null);
  const [policyText, setPolicyText] = useState('');
  const [policyTitle, setPolicyTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    if (editMode && currentPolicy) {
      // Update existing policy
      const updatedPolicies = policies.map((policy) =>
        policy === currentPolicy ? { ...policy, text: policyText } : policy
      );
      setPolicies(updatedPolicies);
    } else {
      // Create new policy
      setPolicies([...policies, { title: policyTitle, text: policyText }]);
    }
    setPolicyText('');
    setPolicyTitle('');
    setCurrentPolicy(null);
    setEditMode(false);
  };

  const handleEdit = (policy) => {
    setPolicyTitle(policy.title);
    setPolicyText(policy.text);
    setCurrentPolicy(policy);
    setEditMode(true);
  };

  const handleDelete = (policy) => {
    const updatedPolicies = policies.filter((p) => p.title !== policy.title);
    setPolicies(updatedPolicies);
    setPolicyText('');
    setCurrentPolicy('');
    setEditMode(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
const openeditModal = (policy) => {
  if (policy) {
    setPolicyTitle(policy.title);
    setPolicyText(policy.text);
    setCurrentPolicy(policy);
    setEditMode(true);
  } else {
    setPolicyTitle('');
    setPolicyText('');
    setCurrentPolicy(null);
    setEditMode(false);
  }
  setShowModal(true);
};

  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-4 -mt-10 w-3/4">
      {/* Modal for creating/editing policy */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded p-6 w-3/4">
            <h2 className="text-xl font-semibold bg-customBlue-700 p-3 text-white">
              {editMode ? Editheading : Createheading}
            </h2>
            <div className="mt-4">
              <label htmlFor="policyTitle" className="block text-sm font-medium text-gray-700">
                Title:
              </label>
              <input
                type="text"
                id="policyTitle"
                className="mt-1 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={policyTitle}
                onChange={(e) => setPolicyTitle(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="policyText" className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                id="policyText"
                className="mt-1 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={policyText}
                onChange={(e) => setPolicyText(e.target.value)}
                rows={10}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSave}
              >
                {editMode ? buttonUpdate : buttonCreate}
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

      {/* List of existing policies */}
      <div className="rounded overflow-hidden bg-white shadow-lg p-3 mb-3 md:col-span-2">
        <h2 className="text-xl font-semibold bg-customBlue-700 p-3 mt-3 text-white">{listHeading}</h2>
        <div className="flex justify-end mb-4">
          <button
            className="px-4 py-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={openModal}
          >
            <i className="fas fa-plus mr-2"></i>Create New
          </button>
        </div>
        <ul className="mt-4 divide-y divide-gray-200 px-2">
          {policies.map((policy, index) => (
            <li key={index} className="flex items-center py-2 mt-3 bg-customBlue">
              <span className="mr-auto px-2">{policy.title}</span>
              <i
                className="fas fa-edit text-white mr-2 hover:text-green-700"
                onClick={() => openeditModal(policy)}
              />
              <i
                className="fas fa-trash text-white mr-2 hover:text-red-700"
                onClick={() => handleDelete(policy)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
