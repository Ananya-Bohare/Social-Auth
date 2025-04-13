import React, { useState } from "react";
import { auth, googleProvider, facebookProvider, signInWithPopup, githubProvider, signOut } from "./firebase";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [user, setUser] = useState(null);

  // Facebook Login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Facebook Login Failed:", error);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Google Login Failed:", error);
    }
  };

  // GitHub Login
  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setUser(result.user);
    } catch (error) {
      console.error("GitHub Login Failed:", error);
    }
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>

        {user ? (
          <div className="text-center mt-6">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-20 h-20 rounded-full mx-auto shadow-md"
            />
            <h3 className="text-lg font-semibold mt-2">{user.displayName}</h3>
            <p className="text-gray-600">{user.email}</p>

            <button
              onClick={handleLogout}
              className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg shadow-md transition hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            <button
              onClick={handleFacebookLogin}
              className="flex items-center justify-center gap-3 w-full py-2 bg-blue-600 text-white rounded-lg shadow-md transition hover:bg-blue-700"
            >
              <FaFacebook className="text-xl" />
              Login with Facebook
            </button>

            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-3 w-full py-2 bg-red-500 text-white rounded-lg shadow-md transition hover:bg-red-600"
            >
              <FaGoogle className="text-xl" />
              Login with Google
            </button>

            <button
              onClick={handleGithubLogin}
              className="flex items-center justify-center gap-3 w-full py-2 bg-gray-800 text-white rounded-lg shadow-md transition hover:bg-gray-900"
            >
              <FaGithub className="text-xl" />
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
