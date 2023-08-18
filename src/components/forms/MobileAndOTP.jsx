import { useState,useRef } from "react"
import {TiTick} from 'react-icons/ti'

const MobileAndOTP = ({mobileNumber,handleMobileNumber,setSignInWithOTP}) => {
  const [showOTP,setShowOTP] = useState(false)
  const [otp,setOtp] = useState({})
  const d1ref = useRef(null)
  const d2ref = useRef(null)
  const d3ref = useRef(null)
  const d4ref = useRef(null)
  const d5ref = useRef(null)
  const d6ref = useRef(null)

  const handleSendOTP = ()=>{
    setShowOTP(true)
  }

  const handleKeyDown1 = (e)=>{
    switch (e.key) {
      case "ArrowRight":
        d2ref.current.focus()
        break;
      default:
        return; 
    }
  }

  const handleKeyDown6 = (e)=>{
    switch (e.key) {
      case "ArrowLeft":
        d5ref.current.focus()
        break;
      default:
        return; 
    }
  }

  const handleKeyDown2to5 = (e,ref1,ref2)=>{
    switch (e.key) {
      case "ArrowRight":
        ref2.current.focus()
        break;
      case "ArrowLeft":
        ref1.current.focus()
        break;
      default:
        return; 
    }
  }

  const handleDigit = (e,ref)=>{
    if(e.target.value !='')
    ref.current.focus()
    console.log(otp)
    setOtp({...otp,[e.target.name]:e.target.value})
  }
  
  const handleDigit6 = (e)=>{
    setOtp({...otp,[e.target.name]:e.target.value})
  }
  
  return (
    <div className="w-80">
      
      {
        showOTP?
        <div>
            <OTPMsg/>
            <div className="mt-8">
            <h5 className="text-lg text-gray-500 ml-1">Enter Your 6-digit OTP</h5>
            <div className="flex flex-row mt-6">
              <input autoFocus onKeyDown={(e)=>handleKeyDown1(e)} onChange={(e)=>handleDigit(e,d2ref)} ref={d1ref} name="d1" maxLength={1} className="form-control w-12 h-12 focus:shadow-none focus:border-amber-600 rounded-sm mx-1 text-center"/>
              <input onKeyDown={(e)=>handleKeyDown2to5(e,d1ref,d3ref)} onChange={(e)=>handleDigit(e,d3ref)} ref={d2ref} name="d2" maxLength={1} className="form-control w-12 h-12 focus:shadow-none focus:border-amber-600 rounded-sm mx-1 text-center"/>
              <input onKeyDown={(e)=>handleKeyDown2to5(e,d2ref,d4ref)} onChange={(e)=>handleDigit(e,d4ref)} ref={d3ref} name="d3" maxLength={1} className="form-control w-12 h-12 focus:shadow-none focus:border-amber-600 rounded-sm mx-1 text-center"/>
              <input onKeyDown={(e)=>handleKeyDown2to5(e,d3ref,d5ref)} onChange={(e)=>handleDigit(e,d5ref)} ref={d4ref} name="d4" maxLength={1} className="form-control w-12 h-12 focus:shadow-none focus:border-amber-600 rounded-sm mx-1 text-center"/>
              <input onKeyDown={(e)=>handleKeyDown2to5(e,d4ref,d6ref)} onChange={(e)=>handleDigit(e,d6ref)} ref={d5ref} name="d5" maxLength={1} className="form-control w-12 h-12 focus:shadow-none focus:border-amber-600 rounded-sm mx-1 text-center"/>
              <input onKeyDown={(e)=>handleKeyDown6(e)} onChange={(e)=>handleDigit6(e)} ref={d6ref} name="d6" maxLength={1} className="form-control w-12 h-12 focus:shadow-none focus:border-amber-600 rounded-sm mx-1 text-center"/>
            </div>
            <div>
            <button className="h-10 mt-10 w-[21rem] bg-amber-500 text-white text-lg font-semibold hover:bg-amber-600 rounded-none">
              Verify OTP
            </button>
          </div>
          </div>
        </div>:
        <div>
          <Heading/>
          <div className="form-floating  mt-3">
            <input 
              className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
              id="mobileNumber"
              placeholder="Enter Mobile Number"
              name="mobileNumber"
              value={mobileNumber}
              type="tel"
              onChange = {(e)=>handleMobileNumber(e)}
              autoFocus
            />
            <label 
              htmlFor="mobileNumber"
              className="text-gray-500"
            >
              Mobile Number
            </label>
          </div>
          <div className="flex justify-end mt-1.5">
          <h6 className="text-gray-500 text-sm w-fit hover:cursor-pointer" onClick={()=>setSignInWithOTP(false)}>
            sign in with password?
          </h6>
        </div>
          <div className="mb-10">
            <button onClick={()=>handleSendOTP()} className="h-10 mt-6 w-full bg-amber-500 text-white text-lg font-semibold hover:bg-amber-600 rounded-none">
              Send OTP
            </button>
          </div>
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

const OTPMsg = ()=>{
  
  return(
    <div className="flex flex-row items-center">
      <TiTick className="text-3xl text-green-800"/>
      <h3 className="text-xl font-bold text-green-800">OTP sent successfully!</h3>
    </div>
  )
}
