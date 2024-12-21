import Image from 'next/image'
import logo from '../public/images/SlickSite3.png'
import SalesButton from './SalesButton'
import Stats from './Stats'
//import Video from 'next-video'
//import myVideo from '../public/video.mp4'
    

const OpeningSection = () => {
  return (
    <div className='flex flex-col items-center'>
    <div className='flex justify-center h-20 w-full'>
        <Image src={logo} alt="logo" width={220} height={250} />
    </div>
    <div className='h-1 w-[100%] bg-[#D90429]'></div>
    <div className='flex flex-col items-center w-full pt-20 text-4xl text-center text-[#EDF2F4]'>
      <h3 className='w-[95%] bg-[#8D99AE] text-2xl italic font-bold text-black'>UK BUSINESS OWNERS</h3>
      <h1>Stop paying for expensive <span className='italic'>&quot;websites&quot;</span> that produce no results</h1>
      <p className='text-3xl'>Get a website that gets you <strong>more leads</strong> and <strong>more sales</strong></p>
    </div>
    <div className='w-[600px] h-[400px] bg-[#EDF2F4] shadow-[0_5px_30px_5px_rgba(0,0,0,0.9)] shadow-red-600 mt-3'>This will be a video</div>
    <Stats />
    <div className='flex flex-col items-center w-full mt-10 text-[#EDF2F4]'>
        <p className='text-xl italic'>Get Started In 30 Seconds</p>
        <SalesButton />
        <div className='h-1 w-[80vw] bg-[#EF233C] mt-10'></div>
        <p className='mt-5 text-2xl'>(Offer ends <strong>January 1st</strong>)</p>
    </div>
    </div>
  )
}

export default OpeningSection