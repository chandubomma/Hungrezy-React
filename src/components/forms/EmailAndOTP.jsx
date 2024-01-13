import { useState} from "react"
import OTPField from "./OTPField"
import EmailField from "./EmailField"

const EmailAndOTP = ({email,handleEmail,setSignInWithOTP}) => {
    const [showOTP,setShowOTP] = useState(false)

    const handleVerifyOTP = ()=>{

    }

    const handleSendOTP = ()=>{
        setShowOTP(true)
    }
  return (
    <div className="w-80">
      
      {
        showOTP?
        <OTPField handleVerifyOTP={handleVerifyOTP}/>:
        <div>
          <Heading/>
          <EmailField handleEmail={handleEmail} signin={true} handleSendOTP={handleSendOTP} setSignInWithOTP={setSignInWithOTP}/>
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
