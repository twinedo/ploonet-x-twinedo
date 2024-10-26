import React from 'react'
import ImgHero from '@/assets/images/bg-hero.png'
import Image from 'next/image'
import { GoArrowDownLeft } from "react-icons/go";

const HomeHero = () => {
  return (
    <div className='flex w-full flex-1 relative'>
        <Image src={ImgHero} width={undefined} height={934} alt='hero' />
        <div className='w-[125px] h-[125px] flex flex-col justify-center items-center rounded-full bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] px-[27px] py-[24px] absolute top-[210px] right-[41px]'>
             <div className='text-white text-center font-bold text-[19px] leading-6'>제작<br />문의하기</div>
             <GoArrowDownLeft color='white' size={20} />
        </div>
    </div>
  )
}

export default HomeHero