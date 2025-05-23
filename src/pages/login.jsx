import React, { useState } from 'react';

import { Button } from "antd";

import GoogleIcon from "../assets/images/google-icon.png";

// Hook components
import useAuth from "../hooks/useAuth";

import Logo from "../assets/favicon.ico";

const LoginPage = () => {
  // Use hooks state
  const { signInWithGoogle } = useAuth();

  // State
  const [isLoading, setIsLoading] = useState(false);

  const handlerLoginWithGoogle = () => {
    setIsLoading(true);

    // Call signInWithGoogle function from auth provider
    signInWithGoogle();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen page-login">
      {/* Card container login */}
      <div className="flex flex-col items-center justify-between bg-white shadow-md rounded-lg p-8 w-96 h-100">

        {/* Header */}
        <div className="flex items-center justify-center flex-col">

          {/* Logo */}
          <div className='flex items-center justify-center mb-4 w-24 h-24 rounded-full shadow-md bg-white'>
            <img src={Logo} alt="Logo" className="w-full h-full rounded-full" />
          </div>
          {/* Title and description */}
          <h1 className="text-2xl font-bold">
            BOS.Shift
          </h1>
          <p className="text-gray-600 mb-6">
            Bosgaurus Coffee Roasters
          </p>
        </div>

        {/* Title and description */}
        <div className="content h-20 flex items-center justify-center flex-col">
          <Button className="flex items-center" disabled={isLoading} loading={isLoading}
            onClick={handlerLoginWithGoogle}
            style={{
              height: 45
            }}
          >
            {!isLoading && <img src={GoogleIcon} alt="Google" className="w-8 h-8" />}
            <span className="ml-2">Login with Google</span>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;