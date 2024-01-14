import { useState } from "react";
import UserSignUpStepIndicator from "@/components/forms/UserSignUpStepIndicator";
import RestaurantDetailsForm from "@/components/forms/RestaurantDetailsForm";
import EmailField from "@/components/forms/EmailField";
import OTPField from "@/components/forms/OTPField";
import {toast} from 'sonner';


const RestaurantSignUpForm = () => {
  const [currStep, setCurrStep] = useState(1);
  const [restaurant, setRestaurant] = useState({
    email : '',
    restaurantName : '',
    address : '',
    password : ''
  });
 

  const handleEmail = (e)=>{
    setRestaurant({
      ...restaurant,
      email : e.target.value
    })
  }

  const validateEmail = (enteredEmail) => {
    if (!enteredEmail.trim()) {
      toast.warning("Please enter your email address !");       // If email is empty or contains only spaces
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailRegex.test(enteredEmail);
    if (!isValidFormat) {
      toast.error("Invalid email address");     // If email format is invalid
      return false;
    }
    return true;       // If email is valid
  }


 

  async function handleSendOTP() {
    if(!validateEmail(restaurant.email))return;
      //todo : need to check email in user base before sending otp;
      //todo : handle api class for sending otp
    setCurrStep(2);
  }
    

  const handleVerifyOTP = async(OTP) => {
    setCurrStep(3);
  }

  if (currStep == 1)
    return (
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <div className="flex justify-center">
          <UserSignUpStepIndicator currStep={currStep} />
        </div>

        <div className="mt-16">
          <h3 className="mb-8 w-80 text-xl text-gray-500 font-medium">
            Verify Restaurant Email
          </h3>
          <EmailField handleSendOTP={handleSendOTP} handleEmail={handleEmail} email={restaurant.email}/>
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
        <h3 className="mb-4 text-xl text-gray-500 font-medium">Restaurant Details</h3>
        <RestaurantDetailsForm restaurant={restaurant} setRestaurant={setRestaurant} />
      </div>
    </div>
  );
};

export default RestaurantSignUpForm;
