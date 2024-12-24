import Image from 'next/image';
import logo from '../public/images/SlickSite3.png';
import SalesButton from './SalesButton';
import Stats from './Stats';

const OpeningSection = () => {
  return (
    <div
      className="flex flex-col items-center bg-cover bg-center bg-no-repeat relative w-full mb-[-40px]"
      style={{
        backgroundImage: "url('/images/web-background.jpg')",
        backgroundSize: 'cover', // Ensures the image covers the full width of the container
        backgroundPosition: 'center', // Ensures the image is centered
        minHeight: '100vh', // Ensures the section takes full viewport height
      }}
    >
      {/* Faded Overlay */}
      <div className="absolute inset-0 bg-[#2B2D42] opacity-80"></div>

      <div className="flex justify-center h-20 w-full z-10">
        <Image src={logo} alt="logo" width={220} height={250} />
      </div>

      <div className="h-1 w-[100%] bg-[#D90429]"></div>

      <div className="flex flex-col items-center w-full pt-20 text-4xl text-center text-[#EDF2F4] z-10">
        <h3 className="w-[95%] bg-[#8D99AE] text-2xl italic font-bold text-black">UK BUSINESS OWNERS</h3>
        <h1><strong>Transform Your Business with a High-Converting Website – No Upfront Costs!</strong></h1>
        <p className="text-3xl">Get a website that gets you <strong>more leads</strong> and <strong>more sales</strong></p>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-[1000px] h-[auto] mt-3 z-10">
        <div className="relative pb-[56.25%] w-full h-0 overflow-hidden rounded-lg shadow-[0_5px_30px_5px_rgba(0,0,0,0.9)] shadow-red-600">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-10 text-[#EDF2F4] z-10">
        <Stats />
        <p className="text-xl italic mt-5">Get Started In 30 Seconds</p>
        <SalesButton />
        <div className="h-1 w-[80vw] bg-[#EF233C] mt-5"></div>
        <p className="my-5 text-2xl">(Offer ends <strong>January 7th</strong>)</p>
      </div>
    </div>
  );
}

export default OpeningSection;
