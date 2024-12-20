const stats = [
  'Risk Free Guarantee',   
  'Fast Turnaround',
  'SEO Optimized',
]

const Stats = () => {
  return (
    <div className='flex flex-row justify-evenly w-[96%] mt-10'>
        {stats.map((stat, index) => (
            <div key={index} className='flex flex-row items-center gap-2 text-[#EDF2F4]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60" height="60">
                    <circle cx="50" cy="50" r="48" fill="#28a745" />
                    <path d="M40 65 L30 50 L35 45 L40 55 L65 30 L70 35 Z" fill="#fff" />
                </svg>
                <h2 className="text-lg font-bold">{stat}</h2>
            </div>
        ))}
    </div>
  )
}

export default Stats