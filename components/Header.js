import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <div className="parent sticky top-0 py-8 z-[99999]">
          <div className="child relative bg-white rounded-full px-8 h-[90px] flex items-center justify-between gap-3">
             <div className="flex items-center gap-7">
                <Link href="/" className='text-not-black font-[600] text-[18px]'>Home</Link>
                <button className="relative text-not-black font-[600] text-[18px] flex items-center gap-1">About Us <img src="/images/arrow.svg" alt="arrow" /></button>
                <div className="relative text-not-black font-[600] text-[18px] flex items-center gap-1"><Link href="/" className='text-not-black font-[600] text-[18px]'>Our Plans</Link> <button><img src="/images/arrow.svg" alt="arrow" /></button></div>
                <Link href="/" className='text-not-black font-[600] text-[18px]'>Need Assistance?</Link>
             </div>

             <div className="flex items-center gap-7">
                <Link href="/" className='text-not-black font-[600] text-[18px]'>Blog</Link>
                <Link href="/" className='text-not-black font-[600] text-[18px]'>Arabic/English</Link>
                <button className='bg-main-color shadow-main w-[150px] leading-none h-[55px] flex items-center justify-center text-white text-[17px] font-[600] rounded-full'>Get Started</button>
             </div>

            <Link href="/" className='absolute left-1/2 -bottom-[60px] -translate-x-1/2 bg-white rounded-full flex items-center justify-center w-[120px] h-[120px]'><img src="https://vmeals.pagekite.me/media/img_vmealslogoori-10-7.png" className='w-[100px]' alt="logo" /></Link>
          </div>
      </div>
    </>
  )
}

export default Header