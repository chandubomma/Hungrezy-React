import { useState} from "react"
import OTPField from "./OTPField"
import EmailField from "./EmailField"
import { useLocation ,useNavigate } from 'react-router-dom';

const EmailAndOTP = ({email,handleEmail,setSignInWithOTP,validateEmail}) => {
    const [showOTP,setShowOTP] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleVerifyOTP = ()=>{
      if(location.pathname=='/admin/signin'){
        //todo : handle api call fo admin authentication
        navigate('/admin/dashboard');
        return;
      }
      if(location.pathname=='/restaurant/signin'){
        //todo : handle api call fo restaurant authentication
        navigate('/restaurant/dashboard');
        return;
      }
    }

    const handleSendOTP = ()=>{
      if(!validateEmail(email))return;
      //todo : need to check email in user base before sending otp;
      //todo : handle api class for sending otp
      setShowOTP(true)
    }
  return (
    <div className="w-80">
      
      {
        showOTP?
        <OTPField handleVerifyOTP={handleVerifyOTP}/>:
        <div>
          <Heading/>
          <EmailField
           handleEmail={handleEmail}
           signin={true}
           handleSendOTP={handleSendOTP} 
           setSignInWithOTP={setSignInWithOTP}
           validateEmail={validateEmail}
           />
        </div>
      }
        
    </div>
  )
}

export default EmailAndOTP

const Heading = ()=>{

    return(
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3"><span className="text-green-800">Hun</span><span className="text-amber-500">Grezy</span></h1>
        <h4 className="text-lg font-medium text-gray-500">Welcome back!</h4>
      </div>
    )
  }
