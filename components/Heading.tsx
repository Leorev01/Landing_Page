import Image from 'next/image'
//import Video from 'next-video'
//import myVideo from '../public/video.mp4'

const stats = [
    {
        title: 'Risk Free Guarantee',
        description: 'Only pay when you are satisfied'
    },
    {
        title: 'Fast Turnaround',
        description: 'Get your website running in as quick as 3 days'
    },
    {
        title: 'SEO Optimized',
        description: 'Get your website to the top of Google search results'
    }
]
    

const Heading = () => {
  return (
    <div className='flex flex-col items-center'>
    <div className='flex justify-center h-20 w-full'>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
    </div>
    <div className='h-1 w-[100vw] bg-[#D90429]'></div>
    <div className='flex flex-col items-center h-[50vh] w-full pt-20 text-4xl text-center text-[#EDF2F4]'>
      <h3 className='w-[95%] bg-green-700 text-2xl italic text-black'>UK BUSINESS OWNERS</h3>
      <h1>Stop paying for expensive <span className='italic'>&quot;websites&quot;</span> that produce no results</h1>
      <p>Get a website that gets you <strong>more leads</strong> and <strong>more sales</strong></p>
    </div>
    <div className='w-[600px] h-[400px] bg-[#EDF2F4] text-white shadow-[0_5px_30px_5px_rgba(0,0,0,0.9)] shadow-red-600'>This will be a video</div>
    <div className='flex flex-row justify-evenly w-[96%] mt-10'>
        {stats.map((stat, index) => (
            <div key={index} className='flex flex-row items-center gap-2 text-[#EDF2F4]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60" height="60">
                    <circle cx="50" cy="50" r="48" fill="#28a745" />
                    <path d="M40 65 L30 50 L35 45 L40 55 L65 30 L70 35 Z" fill="#fff" />
                </svg>
                <h2>{stat.title}</h2>
            </div>
        ))}
    </div>
    <div className='flex flex-col items-center w-full mt-10 text-[#EDF2F4]'>
        <p className='text-xl italic'>Get Started In 30 Seconds</p>
        <button className='bg-[#EF233C] text-black text-2xl p-4 mt-5 rounded-lg flex flex-col items-center'>
            SCHEDULE A FREE CONSULTATION
            <span className='text-lg'>20% OFF Christmas Sale</span>
        </button>
        <div className='h-1 w-[80vw] bg-[#EF233C] mt-10'></div>
        <p className='mt-5 text-2xl'>(Offer ends <strong>January 1st</strong>)</p>
    </div>
    </div>
  )
}

export default Heading