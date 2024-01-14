import { useState } from "react"
import { toast } from 'sonner'
import { useLocation ,useNavigate } from 'react-router-dom';

const EmailAndPassword = ({setSignInWithOTP,email,handleEmail,validateEmail}) => {
    const [password,setPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    
    const validatePassword = (enteredPassword) => {
      if (!enteredPassword.trim()) {
        // If password is empty or contains only spaces
        toast.warning("Please enter your password");
        return false;
      }
      const isValidLength = enteredPassword.length >= 6; // Customize the criteria as needed
      if (!isValidLength) {
        // If password length is less than the required minimum
        toast.error("Password must be at least 6 characters");
        return false;
      }
      // If password is valid
      return true;
    };
    
    const handleSignIn = ()=>{
      console.log('Current page location:', location.pathname);
      if(!validateEmail(email))return;
      if(!validatePassword(password))return;
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

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
      }

  return (
    <div className="w-80 ">
        <Heading/>
        <div className="form-floating mb-3 mt-3">
          <input 
            className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
            id="email"
            placeholder="Enter Email"
            name="email"
            type="email"
            value={email}
            onChange={(e)=>handleEmail(e)}
            autoFocus
          />
          <label 
            htmlFor="email"
            className="text-gray-500"
          >
            Email
          </label>
        </div>

        <div className="form-floating mt-3">
          <input
            className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
            id="password" 
            placeholder="Enter Password" 
            name="password"
            type="password"
            value={password}
            onChange={(e)=>handlePasswordChange(e)} 
          />
          <label 
            htmlFor="password"
            className="text-gray-500"
          >
            Password
          </label>
        </div>
        <div className="flex justify-end mt-1">
          <h6 className="text-gray-500 text-sm w-fit hover:cursor-pointer hover:text-gray-400" onClick={()=>setSignInWithOTP(true)}>
            sign in with OTP?
          </h6>
        </div>
        <div className="mt-6">
          <button onClick={handleSignIn} className="h-10 w-full bg-amber-500 text-white text-md font-semibold hover:bg-amber-600 rounded-none">
            Sign in
          </button>
        </div>
        <div className="mt-16 flex flex-row ">
          <h6 className="text-gray-500 font-medium text-sm w-fit hover:cursor-pointer hover:text-gray-400">
            New to Hungrezy? Register Here
          </h6>
        </div>
    </div>
  )
}

export default EmailAndPassword


const Heading = ()=>{

    return(
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3"><span className="text-green-800">Hun</span><span className="text-amber-500">Grezy</span></h1>
        <h4 className="text-lg font-medium text-gray-500">Welcome back!</h4>
      </div>
    )
  }
  
