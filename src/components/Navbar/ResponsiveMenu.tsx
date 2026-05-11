import { motion, AnimatePresence } from 'framer-motion'
import { Dropdownlinks, NavbarMenu } from '../../mockData/data'

interface ResponsiveMenuProps {
  open: boolean;
}

const ResponsiveMenu = ({ open }: ResponsiveMenuProps) => {
  return (
    <AnimatePresence mode="wait">
        {open && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.3 }}
                className="absolute top-20 left-0 w-full h-screen z-20"
            >
              <div className="text-xl font-semibold uppercase bg-primary text-white py-10 rounded-3xl">
                <ul className="flex flex-col items-center gap-6">
                  {NavbarMenu.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} className="hover:text-gray-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                  {Dropdownlinks.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} className="hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> 
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu
