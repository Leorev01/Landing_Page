import React from 'react'
import SalesButton from './SalesButton'
import Stats from './Stats'

const stats = [
    'Custom-built websites designed to convert visitors into customers.',
    'Mobile-optimized designs for seamless performance on any device.',
    'Lightning-fast loading speeds to keep users engaged.',
    'Integrated SEO strategies to drive more traffic to your business.',
    'Ongoing support to ensure your website stays ahead of the competition.',
]

const SecondSection = () => {
  return (
    <div className='bg-[#8D99AE] text-[#2B2D42] mt-10 pt-10 flex flex-col items-center'>
        <div className='flex flex-col items-start ml-10'>
            <h3 className='font-extrabold capitalize'>Take Your Online Presence to the Next Level</h3>
            <h2 className='text-2xl'>With <strong>expertly crafted websites</strong> and a <strong>proven system for delivering results</strong>, we help businesses like yours thrive online.</h2>
        </div>
        <div className='w-[600px] h-[400px] bg-[#EDF2F4] shadow-[0_5px_30px_5px_rgba(0,0,0,0.9)] shadow-red-600 mt-5'>This will be a video</div>
        <div className='flex flex-col items-start w-full mt-5'>            
            <h3 className='text-3xl self-center'>What we deliver:</h3>
            {stats.map((stat, index) => (
                <h2 className='text-xl mx-10' key={index}>✅ {stat}</h2>
            ))}
            <div className='mx-10 mt-5 text-xl'>
                <p>
                Schedule your <strong>FREE 15-minute</strong> consultation today to discuss your project and receive a no-obligation strategy tailored to your business. 
                </p>
                <p className='mt-5'>
                It’s completely free and risk-free – just click the link below to book your call now!
                </p>
            </div>            
        </div>
        <SalesButton />
        <Stats />
    </div>
  )
}

export default SecondSection