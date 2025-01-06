// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle, FaInstagram } from 'react-icons/fa';
// import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

// const Signup = () => {
// const [error, setError] = useState('');
// const navigate = useNavigate();

// const handleSignup = async (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const password = formData.get('password');
//   const confirmPassword = formData.get('confirmPassword');

//   if (password !== confirmPassword) {
//     setError('Passwords do not match.');
//     return;
//   }

//   const userData = {
//     firstName: formData.get('firstName'),
//     lastName: formData.get('lastName'),
//     email: formData.get('email'),
//     password: formData.get('password'),
//   };

//   try {
//     const response = await fetch('http://localhost:9897/api/users/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       console.log('Signup successful:', result);
//       navigate('/login'); // Replace '/success' with your desired path
//     } else {
//       setError(result.message || 'Signup failed.');
//     }
//   } catch (error) {
//     console.error('Error during signup:', error);
//     setError('An error occurred. Please try again.');
//   }
// };

// const googleID = "418980168354-o6oghiov127pph7dnb663aj0pjqif26d.apps.googleusercontent.com";

// const redirectToLogin = () => {
//   navigate("/login");
// };

// const handleGoogleSuccess = (response) => {
//   console.log('Google login success:', response.profileObj);
// };

// const handleGoogleFailure = (error) => {
//   console.error('Google login failed:', error);
// };

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || "");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     let firstName = e.target.firstName.value;
//     let lastName = e.target.lastName.value;
//     let email = e.target.email.value;
//     let password = e.target.password.value;
//     let confirmPassword = e.target.confirmPassword.value;

//     if (firstName && lastName && email && password && confirmPassword) {
//       if (password === confirmPassword) {
//         const formData = {
//           username: `${firstName} ${lastName}`,
//           email,
//           password,
//         };

//         try {
//           const response = await fetch("http://localhost:9897/api/users/register", {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//           });

//           if (response.ok) {
//             toast.success("Registration successful");
//             navigate("/login");
//           } else {
//             const errorData = await response.json();
//             setError(errorData.message || "Registration failed");
//           }
//         } catch (err) {
//           setError(err.message);
//         }
//       } else {
//         setError("Passwords don't match");
//       }
//     } else {
//       setError("Please fill all inputs");
//     }
//   };

//   // Add state for error
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (token !== "") {
//       toast.success("You already logged in");
//       navigate("/dashboard");
//     }
//   }, [navigate, token]);

//   const googleID = "418980168354-o6oghiov127pph7dnb663aj0pjqif26d.apps.googleusercontent.com";

//   const redirectToLogin = () => {
//     navigate("/login");
//   };

//   const handleGoogleSuccess = (response) => {
//     console.log('Google login success:', response.profileObj);
//   };

//   const handleGoogleFailure = (error) => {
//     console.error('Google login failed:', error);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300">
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Left Illustration Section */}
//         <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-b from-green-300 to-green-500">
//           <img
//             src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740"
//             alt="Illustration"
//             className="w-3/4 mb-6"
//           />
//           <h2 className="text-white text-2xl font-semibold">Join Us Today!</h2>
//         </div>

//         {/* Right Form Section */}
//         <div className="flex-1 p-8">
//           <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
//           <form className="space-y-6" onSubmit={handleSignup}>
//             <div className="flex space-x-4">
//               <div className="flex-1">
//                 <label htmlFor="firstName" className="block text-gray-600 mb-2">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   id="firstName"
//                   placeholder="First Name"
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 />
//               </div>
//               <div className="flex-1">
//                 <label htmlFor="lastName" className="block text-gray-600 mb-2">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   id="lastName"
//                   placeholder="Last Name"
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-gray-600 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email Address"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-gray-600 mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">Confirm Password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 placeholder="Confirm Password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 required
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           <div className="text-center mt-4">
//             <p className="text-sm text-gray-500">Or Sign Up With</p>
//             <div className="flex justify-center space-x-4 mt-2">
//               <GoogleLogin
//                 clientId={googleID}
//                 onSuccess={handleGoogleSuccess}
//                 onFailure={handleGoogleFailure}
//                 cookiePolicy={'single_host_origin'}
//                 render={(renderProps) => (
//                   <div
//                     onClick={renderProps.onClick}
//                     className="w-12 h-12 flex items-center justify-center text-red-500 bg-gray-200 rounded-full hover:bg-red-100 cursor-pointer"
//                   >
//                     <FaGoogle className="text-2xl" />
//                   </div>
//                 )}
//               />
//             </div>
//           </div>

//           <div className="text-center mt-4">
//           <button
//               className="text-green-500 hover:underline"
//               onClick={redirectToLogin}
//               // Redirect on button click
//             >
//               Already have an account? Sign In
//             </button>
//           </div>

//           {/* Company Social Links */}
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-500">Follow us on</p>
//             <div className="flex justify-center space-x-4 mt-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600"
//               >
//                 <FaFacebook className="w-8 h-8 hover:text-blue-700" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400"
//               >
//                 <FaTwitter className="w-8 h-8 hover:text-blue-500" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-800"
//               >
//                 <FaLinkedin className="w-8 h-8 hover:text-blue-900" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-pink-500"
//               >
//                 <FaInstagram className="w-8 h-8 hover:text-pink-600" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import scrumban from "../assets/scrumban-logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );

  const googleID =
    "418980168354-o6oghiov127pph7dnb663aj0pjqif26d.apps.googleusercontent.com";

  const handleGoogleSuccess = (response) => {
    console.log("Google login success:", response.profileObj);
    // Handle user data or token here
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if (name && lastname && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const formData = {
          username: `${name} ${lastname}`,
          email,
          password,
        };
        try {
          await axios.post("http://localhost:9897/api/users/register", formData);
          toast.success("Registration successful");
          navigate("/login");
        } catch (err) {
          toast.error(err.message);
        }
      } else {
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if (token) {
      toast.success("You are already logged in");
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200">
      <div className=" mt-2 mb-2 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-b from-green-300 to-green-500">
          <img
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740"
            alt="Illustration"
            className="w-3/4 mb-6"
          />
          <h2 className="text-white text-2xl font-semibold">Join Us Today!</h2>
        </div>
        <div className="flex-1 flex flex-col mt-3 justify-center px-0">
          <div className="max-w-md mx-auto">
            <div className="text-center pb-10">
              <img src={scrumban} alt="Logo" className="w-20 h-20 mx-auto" />
              <h2 className="text-3xl mb-2">Welcome to our website!</h2>
              <p className="text-lg font-light mb-2">
                Please enter your details
              </p>
            </div>
            <form
              onSubmit={handleRegisterSubmit}
              className="flex flex-col space-y-1"
            >
              <div className="flex space-x-4"> 
                <input
                  type="text"
                  placeholder="Firstname"
                  name="name"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full p-4 border-b border-black outline-none"
                required
              />
              <input
              type="phone"
              placeholder="Phone Number"
              name="phone"
              className="w-full p-4 border-b border-black outline-none"
              required
            />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                )}
              </div>
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full mb-2 mt-4 p-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-200 hover:text-black transition"
                >
                  Sign Up
                </button>
              </div>
              <GoogleLogin
                clientId={googleID}
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <div
                    onClick={renderProps.onClick}
                    className="w-full p-4 mt-4 flex items-center justify-center space-x-2 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer"
                  >
                    <img src={GoogleSvg} alt="" className="w-6" />
                    <span>Sign up with Google</span>
                  </div>
                )}
              />
            </form>
            <p className="text-center mt-6 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-bold hover:underline">
                Login
              </Link>
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">Follow us on</p>
            <div className="flex justify-center space-x-4 mt-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <FaFacebook className="w-8 h-8 hover:text-blue-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <FaTwitter className="w-8 h-8 hover:text-blue-500" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800"
              >
                <FaLinkedin className="w-8 h-8 hover:text-blue-900" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
              >
                <FaInstagram className="w-8 h-8 hover:text-pink-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
