import { useState } from "react";
import {useDispatch } from 'react-redux';
import { setCurrentUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const UserDetailsForm = ({ user, setUser }) => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error message for the current field
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation checks here
    const validationErrors = {};
  
    if (!user.firstName) {
      validationErrors.firstName = 'First Name is required';
    }
  
    if (!user.lastName) {
      validationErrors.lastName = 'Last Name is required';
    }
  
    if (!user.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      validationErrors.email = 'Invalid email address';
    }
  
    if (!user.password) {
      validationErrors.password = 'Password is required';
    } else if (user.password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }
  
    if (user.password !== user.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        // If there are no validation errors, submit the form or perform further actions
        const response = await fetch(`${import.meta.env.VITE_HUNGREZY_API}/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        if (response.ok) {
          // If the signup request is successful, you can handle the response accordingly
          console.log('User successfully signed up:', user);
          // You might want to redirect or update the UI in some way
          // For now, just navigate back
          dispatch(setCurrentUser(user));
          navigate(-1);
        } else {
          // Handle non-successful response, e.g., show an error message
          console.error('Signup request failed:', response.status);
        }
      } catch (error) {
        console.error('Error during signup request:', error);
      }
    } else {
      // If there are validation errors, update the errors state
      console.log(validationErrors);
      setErrors(validationErrors);
    }
  };
 
  
  

  return (
    <div className="w-80 md:w-96">
      <div className="flex flex-col md:flex-row">
        <div className="form-floating md:mr-2 mt-2">
          <input
            className="form-control focus:shadow-none focus:border-amber-600 rounded-md"
            id="firstName"
            placeholder="Enter First Name"
            name="firstName"
            type="text"
            value={user.firstName}
            onChange={handleChange}
            autoFocus
          />
          <label htmlFor="firstName" className="text-gray-500">
            First Name
          </label>
        </div>
        <div className="form-floating mt-2">
          <input
            className="form-control focus:shadow-none focus:border-amber-600 rounded-md"
            id="lastName"
            placeholder="Enter Last Name"
            name="lastName"
            type="text"
            value={user.lastName}
            onChange={handleChange}
          />
          <label htmlFor="lastName" className="text-gray-500">
            Last Name
          </label>
        </div>
      </div>
      <div className="form-floating mt-2">
        <input
          className="form-control focus:shadow-none focus:border-amber-600 rounded-md"
          id="email"
          placeholder="Enter Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="firstName" className="text-gray-500">
          Email
        </label>
      </div>
      <div className="form-floating mt-2">
        <input
          className="form-control focus:shadow-none focus:border-amber-600 rounded-md"
          id="password"
          placeholder="Enter Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-gray-500">
          Password
        </label>
      </div>
      <div className="form-floating mt-2">
        <input
          className="form-control focus:shadow-none focus:border-amber-600 rounded-md"
          id="confirmPassword"
          placeholder="Enter Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword" className="text-gray-500">
          Confirm Password
        </label>
      </div>
      <div className="mt-6">
        <button onClick={handleSubmit} className="h-10 w-full bg-amber-500 text-white text-md font-semibold hover:bg-amber-600 ease-in-out duration-300 transition-colors rounded-md">
          Sign Up
        </button>
      </div>
      <div className="mt-10 flex flex-row ">
        <h6 className="text-gray-500 font-medium text-sm w-fit hover:cursor-pointer hover:text-gray-400">
          By creating account, you are accepting all T&C
        </h6>
      </div>
    </div>
  );
};

export default UserDetailsForm;
