import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import secureImage from "../../assets/secureImage.jpg";

const Hero = () => {

    const BgStyle = {
        backgroundImage: `url(${secureImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: "100%",
    };
  return (
    
    <div className=" relative z-[-1]" style={BgStyle}>
        <div className="container py-16 sm:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] p-10">
                {/* text-content section */}
                <div className="space-y-7 order-2 sm:order-1">
                    <h1 className="text-4xl font-bold">Safe & secure way to store your{" "}
                        <span className="text-green-500">Passwords</span> cloud</h1>
                    <p className="lg:pr-64">
                        Your passwords are stored securely and easily accessible whenever you need them.
                    </p>
                    {/*  buttons  section */}
                    <div className="flex items-center group">
                        <button className="bg-primary h-[40px] text-white px-3 py-2">
                            Save your Password
                        </button>
                        <FaArrowRight className="inline-block group-hover:translate-x-1 
                        transition-transform duration-200 p-2 text-base h-[40px] w-[40px] bg-primary text-white" />
                    </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                    {/* <img src={secureImage} alt="Secure Password Storage" /> */}
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Hero
