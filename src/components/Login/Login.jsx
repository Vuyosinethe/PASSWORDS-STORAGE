import React from 'react'
import logo1 from '../../assets/logo1.png'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { 
    IoEyeOutline,
    IoEyeOffOutline, 
    IoLogoApple, 
    IoLogoGoogle,
 } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";


const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        if (password.length < 8) {
            return false;
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        return passwordRegex.test(password);
    }

    const handleLogin = () => {
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!validatePassword(password)) {
            alert("Please enter a valid password.");
            return;
        }



        alert("Login successful!");
    }

  return (
    <div className="w-full h-screen bg-blue-600 flex items-center justify-center">
      <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-white flex flex-col items-center justify-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <img src={logo1} alt="login" className="w-12 md:w-14" />
        <h1 className="text-lg md:text-xl font-semibold text-blue-600">Welcome Back</h1>
        <p className="text-sm md:text-sm text-gray-500">Don't you have an account? <span className="text-blue-600 cursor-pointer hover:underline">Sign up</span></p>
        <div className="w-full flex flex-col gap-3">
            <label 
            htmlFor="email" 
            className="text-sm md:text-base font-medium text-gray-700"
            >Email
            </label>
            <div className="w-full flex items-center p-2 gap-2 border border-gray-300 rounded-xl">
                <MdOutlineAlternateEmail />
                <input 
                type="email" 
                placeholder="Email account" 
                className="w-full outline-none rounded-xl text-sm md:text-base" 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                }}
                />
            </div>
            {!validateEmail(email) && email.length > 0 && (
                <span 
                className="text-red-500 text-sm md:text-base px-2"
                > The email format is not correct
                </span>
            )}

            <label 
            htmlFor="password" 
            className="text-sm md:text-base font-medium text-gray-700"
            >Password
            </label> 
            <div className="w-full flex items-center p-2 gap-2 border border-gray-300 rounded-xl">
                <CiMail />
                <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password " 
                className="w-full outline-none rounded-xl text-sm md:text-base" 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                }}
                />
                {showPassword ? (
                    <IoEyeOffOutline className="right-2 cursor-pointer" 
                    onClick={togglePasswordVisibility} />
                ) : (
                    <IoEyeOutline className="right-2 cursor-pointer" 
                    onClick={togglePasswordVisibility} />
                )}
            </div>
            {!validatePassword(password) && password.length > 0 && (
                <span className="text-red-500 text-sm md:text-base px-2"> 
                The password should be at least 8 characters long and 
                contain both letters and numbers</span>
            )}
        </div>
        <button 
            className="w-full p-2 bg-blue-600 rounded-xl mt-3 
                hover:bg-blue-700 text-white text-sm 
                md:text-base"
            onClick={handleLogin}
        >Login
        </button>
        <div className="relative w-full flex items-center justify-center py-3">
            <div className="w-2/3 h-[2px] bg-gray-300 "></div>
            <h3 className="text-xs md:text-sm px-4 text-gray-500">Or</h3>
            <div className="w-2/3 h-[2px] bg-gray-300 "></div>
        </div>
        <div className="relative w-full flex items-center justify-between">
            <div className="p-2  md:px-10 px-7 bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700 ">
                <IoLogoApple className=" text-white text-lg md:text-xl" />
            </div>
            <div className="p-2  md:px-10 px-7 bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700 ">
                <IoLogoGoogle className=" text-white text-lg md:text-xl" />
            </div>
            <div className="p-2  md:px-10 px-7 bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700 ">
                <FaXTwitter className=" text-white text-lg md:text-xl" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
 