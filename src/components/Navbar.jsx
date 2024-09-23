import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Logo from '../assets/logo.png';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { slideBottom } from '../utility/animation';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <motion.main variants={slideBottom(0.5)} initial='initial' animate='animate' className='sticky z-50 top-0 bg-white'>
            <nav className='shadow-md'>
                <div className='flex justify-between items-center px-8 py-2 container mx-auto'>

                    {/* Left Section: Logo and Hamburger */}
                    <div className='flex items-center gap-4'>
                        <IoIosMenu onClick={() => setOpenMenu(true)} className='text-3xl text-primary cursor-pointer lg:hidden' />
                        <div className='flex items-center'>
                            <img src={Logo} alt='logo' className='h-14 w-14' />
                            <h3 className='hidden lg:block font-bold text-3xl text-primary'>Printi<span className='text-primary'>fy</span></h3>
                        </div>
                    </div>

                    {/* Center Section: Menu Items */}
                    <div className='hidden lg:flex items-center gap-6 xl:gap-8'>
                        {
                            ['Catalog ▾', 'How it works ▾', 'Pricing ▾', 'Blog ▾', 'Services ▾', 'Use-cases ▾', 'Need help? ▾'].map((value, index) => (
                                <p key={index} className='text-lg text-gray-700 hover:text-primary cursor-pointer'>
                                    {value}
                                </p>
                            ))
                        }
                    </div>

                    {/* Right Section: Buttons */}
                    <div className='flex items-center gap-4'>
                        <button type="button" className="text-gray-600 hover:text-primary border border-gray-400 focus:outline-none font-medium rounded-sm text-sm text-center py-3 px-4">
                            Log in
                        </button>

                        <button type="button" className="text-white bg-green-500 border border-green-500 focus:outline-none font-medium rounded-sm text-sm text-center py-3 px-4 hover:bg-green-600">
                            Sign up
                        </button>
                    </div>

                    {/* Sidebar for Mobile */}
                    <div className={clsx("fixed inset-0 lg:hidden bg-black/20 backdrop-blur-sm transition duration-500", openMenu ? "translate-x-0 z-50" : "-translate-x-full z-0")}>
    <section className='text-gray-700 bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-60 shadow-lg'>
        <div className='flex items-center justify-between'>
            <p className='text-2xl font-bold'>Menu</p>
            <IoCloseOutline onClick={() => setOpenMenu(false)} className='text-2xl cursor-pointer' />
        </div>
        {
            ['Catalog', 'How it works', 'Pricing', 'Blog', 'Services', 'Use-cases', 'Need help?'].map((value, index) => (
                <p key={index} className='text-lg font-bold'>{value}</p>
            ))
        }
    </section>
</div>

                </div>
            </nav>
        </motion.main>
    );
}

export default Navbar;