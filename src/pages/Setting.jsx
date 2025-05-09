import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Setting = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 p-6 mt-15">
      <div className="max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-[#35955c] mb-6">Settings</h1>

        <div className="flex items-center justify-between">
          <span className="text-lg text-gray-700 dark:text-[#46825e]">Dark Mode</span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative inline-flex h-8 w-16 transition-colors duration-300 ease-in-out rounded-full ${
              darkMode ? 'bg-green-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-7 w-7 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                darkMode ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
