import TitleSection from '@/components/title-section'
import React from 'react'
import RegularProduction from './regular-production'
import Ploonet from './ploonet'

const HomeMakingProcess = () => {
  return (
    <div className='flex flex-col w-full items-center mt-[107px] md:mt-[240px]'>
        <div className='flex flex-col max-w-[1610px] w-full items-center justify-center md:gap-[60px]'>
            <TitleSection text='MAKING PROCESS' />
            <div className='flex flex-col md:flex-row w-full justify-center gap-[50px]'>
                <RegularProduction />
                <Ploonet />
            </div>
            <div className='mt-[19px] md:mt-[50px] text-center text-[10px] md:text-[14px] leading-[12px] md:leading-[23px] text-[#666666] md:text-[#999999] max-w-[292px] md:max-w-[760px]'>
              * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등 전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.<br /><br className='md:hidden' />
            ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
            </div>
        </div>
    </div>
  )
}

export default HomeMakingProcess