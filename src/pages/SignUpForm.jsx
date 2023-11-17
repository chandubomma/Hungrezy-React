import { useState } from "react";
import UserSignUpStepIndicator from "../components/forms/UserSignUpStepIndicator";
import UserDetailsForm from "../components/forms/UserDetailsForm";
import MobileField from "../components/forms/MobileField";
import OTPField from "../components/forms/OTPField";

const SignUpForm = () => {
  const [currStep, setCurrStep] = useState(1);
  const [user, setUser] = useState({});

  const handleSendOTP = () => {
    setCurrStep(2);
  };

  const handleVerifyOTP = () => {
    setCurrStep(3);
  };

  if (currStep == 1)
    return (
      <div className="flex flex-col my-20 w-screen justify-center items-center">
        <div className="flex justify-center">
          <UserSignUpStepIndicator currStep={currStep} />
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-xl text-gray-500 font-medium">
            Verify Mobile Number
          </h3>
          <MobileField handleSendOTP={handleSendOTP} />
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
    <div className="flex flex-col my-20 w-screen justify-center items-center">
      <div className="flex justify-center">
        <UserSignUpStepIndicator currStep={currStep} />
      </div>

      <div className="mt-16">
        <h3 className="mb-4 text-xl text-gray-500 font-medium">User Details</h3>
        <UserDetailsForm />
      </div>
    </div>
  );
};

export default SignUpForm;
