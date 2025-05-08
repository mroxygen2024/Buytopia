import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <AlertTriangle className="text-yellow-500 w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold text-green-700 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6 text-center">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
