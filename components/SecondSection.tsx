import React from 'react'
import SalesButton from './SalesButton'
import Stats from './Stats'
import Image from 'next/image'
import image1 from '../public/images/texts/text1.png'
import image2 from '../public/images/texts/text2.png'
import image3 from '../public/images/texts/text3.png'

const stats = [
    'Custom-built websites designed to convert visitors into customers.',
    'Mobile-optimized designs for seamless performance on any device.',
    `Your customers won't wait—get more conversions with fast-loading pages.`,
    'Dominate search engines and attract more traffic effortlessly.',
    'Ongoing support to ensure your website stays ahead of the competition.',
]

const SecondSection = () => {
  return (
    <div className='bg-[#8D99AE] text-[#2B2D42] mt-10 py-10 flex flex-col items-center'>
        <div className='flex flex-col items-start ml-10'>
            <h3 className='font-extrabold capitalize'>Take Your Online Presence to the Next Level</h3>
            <h2 className='text-2xl'>With <strong>expertly crafted websites</strong> and a <strong>proven system for delivering results</strong>, we help businesses like yours thrive online.</h2>
        </div>
        <div className='flex flex-row items-center justify-around w-full mt-5'>
            <Image src={image1}  alt="text chat 1" width={300} height={300} className='rounded-lg'/>
            <Image src={image2}  alt="text chat 2" width={400} height={400} className='rounded-lg'/>
            <Image src={image3}  alt="text chat 3" width={300} height={300} className='rounded-lg'/>
        </div>
        <div className='flex flex-col items-start w-full mt-5'>            
            <h3 className='text-3xl self-center'>What we deliver:</h3>
            {stats.map((stat, index) => (
                <h2 className='text-lg mx-10' key={index}>✅ {stat}</h2>
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