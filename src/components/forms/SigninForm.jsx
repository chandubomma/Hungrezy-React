import { useState } from "react"
import MobileAndPassword from "./MobileAndPassword"
import MobileAndOTP from "./MobileAndOTP"

const SigninForm = () => {
  const [signInWithOTP,setSignInWithOTP] = useState(false)
  const [mobileNumber,setMobileNumber] = useState('')
  const handleMobileNumber = (e)=>{
    setMobileNumber(e.target.value)
  }
  return (
    <div>
      {
        signInWithOTP?
        <MobileAndOTP mobileNumber={mobileNumber} handleMobileNumber={handleMobileNumber} setSignInWithOTP={setSignInWithOTP}/>:
        <MobileAndPassword setSignInWithOTP={setSignInWithOTP} mobileNumber={mobileNumber} handleMobileNumber={handleMobileNumber}/>
      }
    </div>
  )
}


const Heading = ()=>{

  return(
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-3"><span className="text-green-800">Hun</span><span className="text-amber-500">Grezy</span></h1>
      <h4 className="text-lg font-medium text-gray-500">Welcome back!</h4>
    </div>
  )
}

export default SigninForm
