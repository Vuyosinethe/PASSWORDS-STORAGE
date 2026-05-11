import { useState } from 'react'
import { NavbarMenu, Dropdownlinks } from '../../mockData/data';
import {CiSearch} from "react-icons/ci";
import {MdMenu} from "react-icons/md";
import {PiShoppingCartThin} from "react-icons/pi";
import {FaDumbbell} from "react-icons/fa";
import {FaCaretDown} from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';
import Button from '../Button/Button';



 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav>
      <div className="container flex justify-between h-15 items-center py-2 px-6 border border-gray-300  relative"> 
        {/* Logo Section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase p-4 ">
          <FaDumbbell />
          <div className="hidden md:flex items-center gap-1">
          <p>Vault</p>
          <p className="text-2xl flex items-center">Caurd</p>
          </div>
        </div>
        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 text-gray-600">
            {NavbarMenu.map((item) => {
              return (<li key={item.id} >
                <a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">
                  {item.name}</a>
              </li>
              ); 
            })}
             {/* Simple dropdown menu */}
             <li className="cursor-pointer group">
               <a href="/#" className="inline-block py-1 px-3 hover:text-primary font-semibold">
                <div className="flex items-center gap-[2px] py-2">
                 Dropdown
                 <span>
                   <FaCaretDown className="group-hover:rotate-180 duration-300" />
                 </span>
                </div>
               </a>
                {/* Dropdown menu items */}
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                  <ul>
                    {Dropdownlinks.map((item) => {
                      return (
                        <li key={item.id}>
                          <a href={item.link} className="inline-block w-full rounded-md py-2 px-8 hover:bg-primary hover:text-white duration-200">
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
          </ul>
        </div>
        {/* Icon Section */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full duration-200">
            <CiSearch className=" " />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full duration-200">
            <PiShoppingCartThin className=" " />
          </button>
          <Button variant="outline" size="md" className="hidden md:block hover:bg-primary hover:text-white">Login</Button>
        </div>
        {/* Mobile hamburger Menu section */}
        <div className="md:hidden" 
          onClick={()=> setOpen(!open)}>
          <MdMenu className="text-3xl" />
        </div>
      </div>
    </nav>
    {/*Mobile Siderbar section */}
    <ResponsiveMenu open={open} />
    </>
  );
}

export default Navbar
