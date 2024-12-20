import React from 'react'

const other = [
    'High upfront design fees',
    'Long-term, rigid contracts',
    'Complicated processes',
    'Limited post-launch support',
    'Generic, cookie-cutter designs',
    'Slow project timelines',
    'Lack of transparency during development',
    'Hidden costs and extra charges',
]

const slick = [
    'Zero upfront fees',
    'Flexible, no long-term commitments',
    'Streamlined, client-first approach',
    'Ongoing maintenance & support included',
    'Custom, fully tailored solutions',
    'Rapid turnaround times',
    'Full transparency & regular updates',
    'No hidden costs - everything upfront',
]

const ThirdSection = () => {
  return (
    <div className='bg-[#D90429] flex flex-col items-center py-8 sm:mx-4 mx-2 '>
        <h3 className='text-xl w-[95%] bg-black font-bold text-white text-center'>why choose Slick Site?</h3>
        <p className='text-white text-2xl font-bold'>Us vs Other Agencies...</p>

        <div className='flex flex-col lg:flex-row justify-between gap-4 pt-5'>
            <div className='bg-white p-5 rounded-lg mx-4 w-[90vw] lg:w-[40vw] shadow-black shadow-[0_0_20px_0_rgba(0,0,0,0.9)]'>
                <h3 className='ml-5 mb-3 text-2xl font-bold'>Other Agencies</h3>
                {other.map((item, index) => (
                    <p key={index} className='ml-5 text-xl my-2'>❌ {item}</p>
                ))}
            </div>
            <div className='bg-white p-5 rounded-lg mx-4 w-[90vw] lg:w-[40vw] shadow-black shadow-[0_0_20px_0_rgba(0,0,0,0.9)]'>
                <h3 className='ml-5 mb-3 text-2xl font-bold'>Slick Site</h3>
                {slick.map((item, index) => (
                    <p key={index} className='ml-5 text-xl my-2'>✅ {item}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ThirdSection