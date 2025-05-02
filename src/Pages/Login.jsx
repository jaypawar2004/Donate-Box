import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;
  const validateConfirmPassword = () => password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
    }, 1500);
  };

  return (
    <>
    {/* <NavBar /> */}
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Side */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_vector-1744360824147-a63180078c1c?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="h-full  flex items-center justify-center">
          <div className="text-center text-white px-12">
            <h2 className="text-4xl font-bold mb-6">Your Title</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              expedita.
            </p>
          </div>
        </div>
      </div>
 {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
               <img src="/images/logo.png" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h2>
              <p className="text-gray-600 mt-2">
                {isLogin ? 'Please sign in to continue' : 'Get started with your account'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Full Name (Register Only) */}
              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              )}

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    placeholder="you@example.com"
                  />
                  <i className="fas fa-envelope absolute right-2 top-4 w-6 h-6 text-gray-400"></i>
                </div>
                {email && !validateEmail(email) && (
                  <p className="mt-2 text-sm text-red-600">Please enter a valid email address</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                {password && !validatePassword(password) && (
                  <p className="mt-2 text-sm text-red-600">Password must be at least 8 characters</p>
                )}
              </div>

              {/* Confirm Password (Register Only) */}
              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                  {confirmPassword && !validateConfirmPassword() && (
                    <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  loading ||
                  (email && !validateEmail(email)) ||
                  (password && !validatePassword(password)) ||
                  (!isLogin && confirmPassword && !validateConfirmPassword())
                }
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
              </button>

              {/* Switch Form */}
              <p className="mt-6 text-center text-gray-600">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-red-600 hover:text-red-700 font-semibold"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>

     
     
    </div>
    {/* <Footer /> */}
    </>

  );
};

export default Login;
