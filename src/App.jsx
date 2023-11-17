import SignUpForm from "./pages/SignUpForm"
import SigninForm from "./pages/SigninForm"
import AccountTypeOptions from "./pages/AccountTypeOptions"
import Home from "./pages/Home"


const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className="w-fit">
       <Home/>
      </div>
    </div>
  )
}

export default App
