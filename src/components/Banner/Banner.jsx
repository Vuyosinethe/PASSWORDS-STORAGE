import React from 'react'
import chatImage from '../../assets/chatImage.png'
import chatImage2 from '../../assets/chatImage2.png'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className="container">
        <div>

            {/* content section */}
            <div className="space-y-1">
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-4 p-10">
                    <div className="text-center py-20">
                        <h1 className="text-4xl font-bold">Be protected everywhere you are</h1>
                        <p className='text-2xl'>
                            {" "}
                            Protect all your 
                            <span className="text-primary font-bold"> passwords </span>in one place, and access them from anywhere,
                            at any time.
                        </p>
                        <div className="flex items-center group m-20">
                        <button className="bg-primary h-[40px] text-white px-3 py-2">
                            Check your Passwords
                        </button>
                        <FaArrowRight className="inline-block group-hover:translate-x-1 
                        transition-transform duration-200 p-2 text-base h-[40px] w-[40px] bg-primary text-white" />
                    </div>
                    </div>
                    <div className="relative">
                        <img 
                            src={chatImage} 
                            alt="network security" 
                            className="w-full h-auto  clip-blob transition-all duration-300 hover:scale-[1.02]"
                        />
                    </div>
                    
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-10">
                    <div className="relative">
                        <img 
                            src={chatImage2} 
                            alt="network security" 
                            className="w-full h-auto  clip-blob transition-all duration-300 hover:scale-[1.02]"
                        />
                    </div>
                    <div className="text-center py-20">
                        <p>
                            {" "}
                            <span className="text-blue-500 font-bold uppercase">secured passwords</span>  , gives you peace of mind knowing 
                            that your passwords are safe from unauthorized access.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner 