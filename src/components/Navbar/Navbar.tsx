import { useState, useEffect } from 'react';
import { NavbarMenu, Dropdownlinks } from '../../mockData/data';
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';
import Button from '../Button/Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0  w-full z-50 transition-all duration-300 
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-md rounded-lg m-2 shadow-lg' 
          : 'bg-white border-b border-gray-300 '
        }`}>
        
        <div className="container flex justify-between items-center px-6">
          
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell className="text-primary" />
            <div className="hidden md:flex items-center gap-1">
              <p>Vault</p>
              <p className="text-2xl">Caurd</p>
            </div>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.link} 
                    className="inline-block py-1 px-3 hover:text-primary font-semibold transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              {/* Dropdown */}
              <li className="cursor-pointer group relative">
                <a href="/#" className="inline-block py-1 px-3 hover:text-primary font-semibold">
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </div>
                </a>

                {/* Dropdown Menu */}
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48">
                  <ul>
                    {Dropdownlinks.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={item.link} 
                          className="inline-block w-full rounded-md py-2 px-6 hover:bg-primary hover:text-white duration-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Icon Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full transition-all">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full transition-all">
              <PiShoppingCartThin />
            </button>
            <Button 
              variant="outline" 
              size="md" 
              className="hidden md:block hover:bg-primary hover:text-white transition-all"
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <div 
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <MdMenu className="text-3xl" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;