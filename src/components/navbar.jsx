import React from 'react'
import Logo from "../assets/logo.png"
import { MdMenu } from 'react-icons/md';
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower"
function Navbar() {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "Categories",
      link: "#",
    },
    {
      id: 3,
      title: "Blog",
      link: "#",
    },
    {
      id: 4,
      title: "About",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];
  return (
    <div className='text-white py-8'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='container flex justify-between items-center'>

        {/* logo section */}
        <div>
          <img src={Logo} className='max-w-[100px] invert' />
        </div>

        {/* content section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-4 relative z-40'>
            {
              NavbarMenu?.map((item) => {
                return (
                  <li>
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 10,
                        follwSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference"
                      }}
                    >
                      <a className='inline-block text-base font-semibold py-2 px-3 uppercase' href={item?.link}>{item?.title}</a>
                    </UpdateFollower>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* Hamburger section */}
        <div className='md:hidden'>
          <MdMenu className='text-4xl ' />
        </div>

      </motion.div>
    </div>
  )
}

export default Navbar
