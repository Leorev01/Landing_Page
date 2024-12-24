const stats = [
  'Risk Free Guarantee',
  'Fast Turnaround',
  'SEO Optimized',
];

const Stats = () => {
  return (
    <div className='flex flex-row justify-evenly w-full mt-10'>
      {stats.map((stat, index) => (
        <div key={index} className='flex flex-row items-center gap-2 text-[#EDF2F4]'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16">
            <circle cx="50" cy="50" r="48" fill="#28a745" />
            <path d="M40 65 L30 50 L35 45 L40 55 L65 30 L70 35 Z" fill="#fff" />
          </svg>
          <h2 className="text-sm sm:text-lg font-bold text-center sm:text-left">{stat}</h2>
        </div>
      ))}
    </div>
  );
};

export default Stats;
