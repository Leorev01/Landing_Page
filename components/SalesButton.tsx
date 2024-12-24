import Link from 'next/link';

const SalesButton = () => {
  return (
    <Link href='schedule' className='bg-[#EF233C] text-white font-bold text-center text-2xl p-4 mt-5 rounded-lg flex flex-col items-center transition-transform transform animate-bounce'>
          SCHEDULE A FREE CONSULTATION
          <span className='text-lg font-normal'>+ 20% OFF New Years Sale</span>
    </Link>
  );
}

export default SalesButton;
