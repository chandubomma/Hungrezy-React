import { useState } from "react";
import UserSignUpStepIndicator from "../components/forms/UserSignUpStepIndicator";
import UserDetailsForm from "../components/forms/UserDetailsForm";
import MobileField from "../components/forms/MobileField";
import OTPField from "../components/forms/OTPField";


const SignUpForm = () => {
  const [currStep, setCurrStep] = useState(1);
  const [user, setUser] = useState({
    mobileNumber : '+91',
    firstName : '',
    lastName : '',
    email : '',
    password : ''
  });
 

  const handleMobileNumber = (e)=>{
    setUser({
      ...user,
      mobileNumber : e.target.value
    })
  }

 

  async function handleSendOTP(mobileNumber) {
    const url = 'http://localhost:3000/auth/sendOTP';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You may need to include additional headers based on your server requirements
        },
        body: JSON.stringify({mobileNumber}),
      });
  
      if (!response.ok) {
        // Handle non-successful responses here
        console.error('Error:', response.status, response.statusText);
        return null;
      }
  
      // Parse and return the response JSON
      const data = await response.json();
      console.log('Response:', data);

      setCurrStep(2);
      return data;
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error.message);
      return null;
    }
  }
    

  const handleVerifyOTP = async(OTP) => {
    const url = 'http://localhost:3000/auth/verifyOTP';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You may need to include additional headers based on your server requirements
        },
        body: JSON.stringify({OTP,mobileNumber:user.mobileNumber}),
      });
  
      if (!response.ok) {
        // Handle non-successful responses here
        console.error('Error:', response.status, response.statusText);
        return null;
      }
  
      // Parse and return the response JSON
      const data = await response.json();
      console.log('Response:', data);

      setCurrStep(3);
      return data;
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error.message);
      return null;
    }
  };

  if (currStep == 1)
    return (
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <div className="flex justify-center">
          <UserSignUpStepIndicator currStep={currStep} />
        </div>

        <div className="mt-16">
          <h3 className="mb-8 w-80 text-xl text-gray-500 font-medium">
            Verify Mobile Number
          </h3>
          <MobileField handleSendOTP={handleSendOTP} handleMobileNumber={handleMobileNumber} mobileNumber={user.mobileNumber}/>
        </div>
      </div>
    );
  else if (currStep == 2)
    return (
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <div className="flex justify-center">
          <UserSignUpStepIndicator currStep={currStep} />
        </div>

        <div className="mt-16">
          <OTPField handleVerifyOTP={handleVerifyOTP} />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex justify-center">
        <UserSignUpStepIndicator currStep={currStep} />
      </div>

      <div className="mt-16">
        <h3 className="mb-4 text-xl text-gray-500 font-medium">User Details</h3>
        <UserDetailsForm user={user} setUser={setUser} />
      </div>
    </div>
  );
};

export default SignUpForm;
