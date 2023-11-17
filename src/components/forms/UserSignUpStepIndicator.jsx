import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

const UserSignUpStepIndicator = ({ currStep }) => {
  return (
    <div className="flex flex-row">
      <StepIndicator currStep={currStep} stepNo={1}>
        <FaMobileScreenButton className="text-gray-500" />
      </StepIndicator>
      <StepIndicator currStep={currStep} stepNo={2}>
        <MdOutlineSms className="text-gray-500" />
      </StepIndicator>
      <StepIndicator currStep={currStep} stepNo={3} lastIndicator={true}>
        <FaRegUser className="text-gray-500" />
      </StepIndicator>
    </div>
  );
};

export default UserSignUpStepIndicator;

const StepIndicator = ({ currStep, stepNo, children, lastIndicator }) => {
  if (currStep > stepNo)
    return (
      <div className="flex flex-row justify-center items-center">
        <div className="w-8 h-8 rounded-full border-amber-500 bg-amber-500 border-2 items-center flex justify-center flex-row">
          <TiTick className="text-white text-xl" />
        </div>
        {lastIndicator ? (
          <span></span>
        ) : (
          <span className="w-24 bg-amber-500 h-0.5 mx-3"></span>
        )}
      </div>
    );
  else
    return (
      <div className="flex flex-row justify-center items-center">
        <div className="w-8 h-8 rounded-full border-gray-500 border-2 items-center flex justify-center flex-row">
          {children}
        </div>
        {lastIndicator ? (
          <span></span>
        ) : (
          <span className="w-24 bg-gray-500 h-0.5 mx-3"></span>
        )}
      </div>
    );
};
