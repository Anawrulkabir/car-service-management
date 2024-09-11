import Image from 'next/image';
import React from 'react';
import logo from '../images/logo.png'
import Link from 'next/link';
import { TiMessageTyping } from 'react-icons/ti';

const Navbar = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between gap-5 '>
            {/* logo section */}
            <div className="flex gap-2 w-full items-center justify-center lg:justify-start">
                <Image src={logo} height={50} width={50} alt='logo' />
                <div>
                    <h1 className='text-2xl font-bold'>CarHive</h1>
                    <p className="text-sm text-gray-500">Repair your car</p>
                </div>
            </div>
            {/* links section */}
            <div className="w-full flex items-center justify-center lg:justify-start">
                <ul className='flex gap-5'>
                    <li className='uppercase font-semibold text-[#FF6E0C]'><Link href={'/'} />Home</li>
                    <li className='uppercase font-semibold'><Link href={'/'} />About Us </li>
                    <li className='uppercase font-semibold'><Link href={'/'} />Services</li>
                    <li className='uppercase font-semibold'><Link href={'/'} />News</li>
                    <li className='uppercase font-semibold'><Link href={'/'} />Contact</li>
                </ul>
            </div>
            {/* text section */}
            <div className="bg-[#053D65] flex items-center justify-center px-5 py-2 gap-2 w-full">
            <TiMessageTyping className='text-5xl text-white'/>
                <div className='flex flex-col gap-0 space-y-0'>
                    <h1 className=' font-bold text-gray-300'>Talk With Our Exparts</h1>
                    <h1 className='text-sm font-bold text-[#FF6E0C]'>(+880) 13196305**</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;