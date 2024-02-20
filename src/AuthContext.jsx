import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const checkToken = async(token)=>{
        const tokenData=await isTokenValid(token)
        if(tokenData){
                const temp  = tokenData.user;
                temp.user_role = tokenData.user_role;
                console.log(2)
                setUser(temp);
                setAccessToken(storedAccessToken);
        }
    }
    if (storedAccessToken) {
        checkToken(storedAccessToken)
      console.log(1)
    }
   
  }, []);

  const signin = async (user,accessToken) => {
    const tokenData=await isTokenValid(accessToken)
    if(tokenData){
            const temp  = tokenData.user;
            temp.user_role = tokenData.user_role;
            console.log(2)
            setUser(temp);
            setAccessToken(accessToken);
            localStorage.setItem('accessToken', accessToken);
    }
      
  };

  const signout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem('accessToken');
  };


  const isTokenValid = async(accessToken) => {
    if (!accessToken) {
      return null; 
    }
    try {
      const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
      console.log(tokenData)
      const expirationTime = tokenData.exp * 1000; 
      const currentTime = Date.now(); 
      if(expirationTime > currentTime)return tokenData; 
    } catch (error) {
      console.error('Error decoding access token:', error);
      return null; 
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, accessToken, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
