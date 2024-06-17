import React from 'react';
import Navbar from '../Navbar';
import right from '../../assets/right.webp';

const Header = () => {
    return (
        <div className='bg-primary bg-cover bg-no-repeat text-black min-h-screen'>
            <Navbar />
            <div className='container mx-auto h-full grid grid-cols-2 mt-10 pt-10'>
                <div className='pl-20 pt-8 h-full flex flex-col justify-center'>
                    <p className='text-6xl font-bold'>Regain <span className='bg-secondary text-white'>Control</span></p>

                    <p className='text-6xl font-bold mt-4'>Over your days</p>
                    <p className='text-black text-2xl  mt-5'>It is a long established fact that a reader </p>
                    <p className='text-black text-2xl'>will be distracted by the readable content.</p>
                    <div className='flex mt-7 ml-10 pt-5'>
                    <button className="bg-primary p-3  mt-5 text-black font-medium tracking-widest border border-black shadow-md">Try for free</button>

                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={right} className='w-full pt-2 ' alt="Right illustration" />

                </div>
            </div>
        </div>
    );
}

export default Header;
