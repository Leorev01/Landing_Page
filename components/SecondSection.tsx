import React from 'react';
import SalesButton from './SalesButton';
import Stats from './Stats';
import Image from 'next/image';
import image1 from '../public/images/texts/text1.png';
import image2 from '../public/images/texts/text2.png';
import image3 from '../public/images/texts/text3.png';

const stats = [
    'Custom-built websites designed to convert visitors into customers.',
    'Mobile-optimized designs for seamless performance on any device.',
    `Your customers won't wait—get more conversions with fast-loading pages.`,
    'Dominate search engines and attract more traffic effortlessly.',
    'Ongoing support to ensure your website stays ahead of the competition.',
];

const SecondSection = () => {
  return (
    <div className="bg-[#8D99AE] text-[#2B2D42] mt-10 py-10 flex flex-col items-center">
      <div className="flex flex-col items-start text-center md:text-left md:ml-10">
        <h3 className="font-extrabold capitalize text-xl md:text-2xl">
          Take Your Online Presence to the Next Level
        </h3>
        <h2 className="text-2xl md:text-3xl mt-4">
          With <strong>expertly crafted websites</strong> and a <strong>proven system for delivering results</strong>, we help businesses like yours thrive online.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
        <div className="flex justify-center">
          <Image
            src={image1}
            alt="text chat 1"
            width={300}
            height={300}
            className="rounded-lg object-cover w-full max-w-[300px] h-auto"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={image2}
            alt="text chat 2"
            width={400}
            height={300}
            className="rounded-lg object-cover h-auto"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={image3}
            alt="text chat 3"
            width={300}
            height={300}
            className="rounded-lg object-cover w-full max-w-[300px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col items-start w-full mt-8 px-4 md:px-10">
        <h3 className="text-3xl text-center w-full">What we deliver:</h3>
        {stats.map((stat, index) => (
          <h2 className="text-lg mt-2" key={index}>
            ✅ {stat}
          </h2>
        ))}
        <div className="mt-8 text-xl">
          <p className='font-bold'>🚀 Ready to take your business to the next level?</p>
          <p className="mt-5">
          Let&apos;s chat for <strong>15 minutes – absolutely free</strong> – and get a <strong>personalized roadmap</strong> for your business success. <strong>No pressure, no obligation</strong>. Just <strong>expert advice</strong> tailored specifically for you.
          </p>
          <p className="mt-5 font-bold">📅 Book your FREE consultation now – limited spots available!</p>
          <p className="mt-5 mb-2">
          <strong>This is your chance</strong> to unlock <strong>actionable insights</strong> that can grow your business. <strong>Don’t wait – schedule today</strong>, and let’s make your goals happen!
          </p>
        </div>
      </div>

      <SalesButton />
      <Stats />
    </div>
  );
};

export default SecondSection;
