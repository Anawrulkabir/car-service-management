import Image from 'next/image';
import React from 'react';
import banner from '../images/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <Image src={banner} height={1920} width={1920} alt='banner'  className='w-full mb-10'/>
        </div>
    );
};

export default Banner;