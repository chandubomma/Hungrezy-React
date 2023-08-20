import { useState} from "react"
import OTPField from "./OTPField"
import MobileField from "./MobileField"


const MobileAndOTP = ({mobileNumber,handleMobileNumber,setSignInWithOTP}) => {
  const [showOTP,setShowOTP] = useState(false)
  
  const handleSendOTP = ()=>{
    setShowOTP(true)
  }
  
  return (
    <div className="w-80">
      
      {
        showOTP?
        <OTPField/>:
        <div>
          <Heading/>
          <MobileField handleMobileNumber={handleMobileNumber} signin={true} handleSendOTP={handleSendOTP} setSignInWithOTP={setSignInWithOTP}/>
        </div>
      }
        
    </div>
  )
}

export default MobileAndOTP


const Heading = ()=>{

  return(
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-3"><span className="text-green-800">Hun</span><span className="text-amber-500">Grezy</span></h1>
      <h4 className="text-lg font-medium text-gray-500">Welcome back!</h4>
    </div>
  )
}


