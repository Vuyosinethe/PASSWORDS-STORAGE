import React from 'react'
import logo1 from '../../assets/logo1.png'
// import { useDispatch, useSelector } from 'react-redux';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SiMaildotru } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline  } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import secutiryImage from '../../assets/secutiryImage.jpg';

const Signup = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    // const dispatch = useDispatch();  Not yet implemented redux store for signup, but this is how you would dispatch actions
    // const user = useSelector((state) => state.user); // Assuming you have a user slice in your redux store to manage user state
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = React.useState({
        firstName: '',
        lastName: '',
    });
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
       
        // Clear field error when user starts typing
        if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Handle blur for validation
    const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        // Optional: validate single field
    };

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z]+$/;
        return nameRegex.test(name);
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

  return (
    <div className="w-full h-screen bg-blue-600 flex items-center justify-center md:justify-end">
        <div className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105 ">
            <img src={secutiryImage} alt="security" className="hidden md:block w-[50%] h-screen object-cover" />
        </div>
        
        <div className="md:w-[50%] p-5 h-screen bg-white flex flex-col items-center justify-center gap-3  shadow-slate-500 shadow-lg">
            <img src={logo1} alt="signup" className="w-20 h-20 object-cover" />
            <h1 className="text-lg md:text-xl font-semibold text-blue-600">Create an account</h1>
            <p className="text-sm md:text-sm text-gray-500"
                >Already have an account? <span
                className="text-blue-600 cursor-pointer hover:underline"
                >Login</span></p>
            <div className="w-full flex flex-col gap-3">    
            <label 
                htmlFor="firstname" 
                className="text-sm md:text-base font-medium text-gray-700">First Name</label>
            <div className="w-full flex items-center p-2 gap-2 border border-gray-300 rounded-xl"> 
                < MdDriveFileRenameOutline/>   
                <input 
                    type="text" 
                    id="firstname" 
                    className="w-full border-none outline-none text-sm md:text-base" 
                    placeholder="Enter your first name" 
                    onChange={(e) => {
                        validateName(e.target.value);
                    }}
                />
            </div>
            <label 
                htmlFor="lastname" 
                className="text-sm md:text-base font-medium text-gray-700">Last Name</label>
            <div className="w-full flex items-center p-2 gap-2 border border-gray-300 rounded-xl"> 
                < MdDriveFileRenameOutline/>  
                <input 
                    type="text" 
                    id="lastname"  
                    placeholder="Enter your last name" 
                    className="w-full border-none outline-none text-sm md:text-base"
                    onChange={(e) => {
                        validateName(e.target.value);
                    }}
                />
            </div>
            <label 
                htmlFor="email" 
                className="text-sm md:text-base font-medium text-gray-700"
            >Email
            </label>
            <div className="w-full flex items-center p-2 gap-2 border border-gray-300 rounded-xl">    
                < SiMaildotru/>  
                <input 
                    type="email"
                    id="email"
                    className="w-full border-none outline-none text-sm md:text-base"
                    placeholder="Enter your email"
                    onChange={(e) => {
                        validateEmail(e.target.value);
                        setEmail(e.target.value);
                    }}
            />
            </div>
            {!validateEmail(email) && email.length > 0 && (
                <span 
                className='text-red-500 text-sm md:text-base px-2'
                >The email format is incorrect
                </span>
            )}
            
            <label 
                htmlFor="password" 
                className="text-sm md:text-base font-medium text-gray-700">Password</label>
            <div className="w-full flex items-center p-2 gap-2 border border-gray-300 rounded-xl">    
                <RiLockPasswordFill />
                <input 
                    type="password" 
                    id="password" 
                    className="w-full border-none outline-none text-sm md:text-base" 
                    placeholder="Enter your password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                    }} 
            />
            {showPassword ? (
                <IoEyeOffOutline 
                    className="text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                />
            ) : (
                <IoEyeOutline 
                    className="text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                />
            )}
            </div>  
            <label 
                htmlFor="confirmpassword" 
                className="text-sm md:text-base font-medium text-gray-700">Confirm Password</label>
            <div className="w-full flex items-center p-2 gap-2 border border-gray-300 rounded-xl">    
                <RiLockPasswordFill />
                <input 
                    type="password" 
                    id="confirmpassword" 
                    className="w-full border-none outline-none text-sm md:text-base" 
                    placeholder="Confirm your password"
                    onChange={(e)=>{
                        setConfirmPassword(e.target.value);
                        validatePassword(e.target.value);
                    }} 
            />
            {showPassword ? (
                <IoEyeOffOutline 
                    className="text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                />
            ) : (
                <IoEyeOutline 
                    className="text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                />
            )}
            </div>
            <div className="w-full flex flex-col gap-3">
                <button className="w-full p-2 bg-blue-600 text-white rounded-xl text-sm md:text-base hover:bg-blue-700 transition duration-300"
                >Sign Up</button>
            </div>
            <div>
                
            </div>
            <div>
                <p className="text-sm md:text-sm text-gray-500">By signing up, you agree to our <span className="text-blue-600 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
