

const UserDetailsForm = ({user,setUser}) => {
    
  return (
    <div className="w-80 md:w-96">
      <Heading/>
      <div className="flex flex-col md:flex-row">
        <div className="form-floating md:mr-2 mt-2">
            <input 
              className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
              id="firstName"
              placeholder="Enter First Name"
              name="firstName"
              type="text"
              // value={user.firstName}
              
              autoFocus
            />
            <label 
              htmlFor="firstName"
              className="text-gray-500"
            >
              First Name
            </label>
          </div>
          <div className="form-floating mt-2">
            <input 
              className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
              id="lastName"
              placeholder="Enter Last Name"
              name="lastName"
              type="text"
              // value={user.lastName}
            />
            <label 
              htmlFor="lastName"
              className="text-gray-500"
            >
              Last Name
            </label>
          </div>
        </div>
        <div className="form-floating mt-2">
            <input 
              className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
              id="email"
              placeholder="Enter Email"
              name="email"
              type="email"
              // value={user.firstName}
            />
            <label 
              htmlFor="firstName"
              className="text-gray-500"
            >
              Email
            </label>
          </div>
          <div className="form-floating mt-2">
          <input
            className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
            id="password" 
            placeholder="Enter Password" 
            name="password"
            type="password"
           
          />
          <label 
            htmlFor="password"
            className="text-gray-500"
          >
            Password
          </label>
        </div>
        <div className="form-floating mt-2">
          <input
            className="form-control focus:shadow-none focus:border-amber-600 rounded-sm" 
            id="confirmPassword" 
            placeholder="Enter Password" 
            name="confirmPassword"
            type="password"
           
            
          />
          <label 
            htmlFor="confirmPassword"
            className="text-gray-500"
          >
           Confirm Password
          </label>
        </div>
        <div className="mt-6">
          <button className="h-10 w-full bg-amber-500 text-white text-lg font-semibold hover:bg-amber-600 rounded-none">
            Sign Up
          </button>
        </div>
        <div className="mt-10 flex flex-row ">
          <h6 className="text-gray-500 font-semibold text-md w-fit hover:cursor-pointer hover:text-gray-400">
            By creating account, you are accepting all T&C 
          </h6>
        </div>
    </div>
  )
}

export default UserDetailsForm


const Heading = ()=>{

  return(
    <div className="mb-3">
      <h1 className="text-5xl font-bold mb-3"><span className="text-green-800">Hun</span><span className="text-amber-500">Grezy</span></h1>
      <h4 className="text-lg font-medium text-gray-500">Sign Up</h4>
    </div>
  )
}
