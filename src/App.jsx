import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState(''); 
  const [age, setAge] = useState(null); 

  const calculateAge = () => {
    const today = new Date();
    const dob = new Date(birthDate);

    if (isNaN(dob.getTime())) {
      setAge("Please enter a valid date.");
      return;
    }

    if (dob > today) {
      setAge("Birth date cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }

    if (months < 0) {
      years--;
      months += 12; 
    }

    setAge(`${years} years, ${months} months, and ${days} days`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans antialiased">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md border border-gray-200 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Age Calculator</h1>

        <div className="mb-6">
          <label htmlFor="birthdate" className="block text-gray-700 text-lg font-medium mb-2">
            Enter your Birth Date:
          </label>
          <input
            type="date" 
            id="birthdate"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 text-gray-900"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <button
          onClick={calculateAge}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate Age
        </button>

        {age && (
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-xl font-semibold">
            Your Age: <span className="block mt-2 text-2xl">{age}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgeCalculator;
