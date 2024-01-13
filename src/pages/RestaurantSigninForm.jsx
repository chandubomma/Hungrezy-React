import { useState } from "react";
import EmailAndPassword from "@/components/forms/EmailAndPassword";
import EmailAndOTP from "@/components/forms/EmailAndOTP";

const RestaurantSigninForm = () => {
  const [signInWithOTP, setSignInWithOTP] = useState(false);
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {signInWithOTP ? (
        <EmailAndOTP
          email={email}
          handleEmail={handleEmail}
          setSignInWithOTP={setSignInWithOTP}
        />
      ) : (
        <EmailAndPassword
          setSignInWithOTP={setSignInWithOTP}
          email={email}
          handleEmail={handleEmail}
        />
      )}
    </div>
  );
};


export default RestaurantSigninForm;
