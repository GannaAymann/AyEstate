import { Button } from '@/components/ui/button'
import React from 'react'

export const Innovative = () => {
    return (
        <div className='bg-black py-[50px] mt-[50px] px-[20px] xl:px-[64px] lg:py-[80px] '>
            <div className='  flex flex-col lg:flex-row  lg:justify-between lg:gap-x-2'>
                <div className='flex flex-col gap-y-[12px] lg:gap-y-[16px] lg:w-[600px]'>
                    <p className="font-[600] text-[16px] leading-[24px] text-white ">Innovative</p>
                    <p className="font-[700] text-[32px] leading-[38px] text-white xl:text-[48px] lg:text-[35px] lg:leading-[46px] xl:leading-[57px] ">Transforming the Real Estate Industry with Excellence</p>
                </div>
                <div className='flex flex-col gap-y-[24px] lg:gap-y-[32px] mt-[20px] lg:mt-0 items-center lg:items-start lg:w-[616px]'>
                    <p className="font-[400] text-[16px] lg:text-[18px] lg:leading-[27px] leading-[24px] text-white">At our company, we take pride in our exceptional success rate, having listed thousands of properties, and ensuring client satisfaction is our top priority.</p>
                    <Button className="font-[600] text-[16px] leading-[24px] bg-app-lightgreen hover:bg-app-lightgreen rounded-[12px] w-[140px] " aria-label="learn">Learn More</Button>
                </div>
            </div>

            <div className='text-white mt-[48px] lg:mt-[80px] grid grid-cols-1  md:grid-cols-3 gap-y-[32px] lg:gap-y-0 xl:gap-x-[48px] lg:gap-x-[40px]'>
                <div className='border-l-2 pl-[32px]'>
                    <p className="font-[700] text-[56px] leading-[78px] xl:text-[80px] xl:leading-[104px]">30%</p>
                    <p className="font-[700] text-[18px] leading-[25px] xl:text-[20px] xl:leading-[28px] mt-2">Success Rate</p>
                </div>

                <div className='border-l-2 pl-[32px]'>
                    <p className="font-[700] text-[56px] leading-[78px] xl:text-[80px] xl:leading-[104px] ">30%</p>
                    <p className="font-[700] text-[18px] leading-[25px] xl:text-[20px] xl:leading-[28px] mt-2">Properties Listed</p>
                </div>

                <div className='border-l-2 pl-[32px]'>
                    <p className="font-[700] text-[56px] leading-[78px] xl:text-[80px] xl:leading-[104px]">30%</p>
                    <p className="font-[700] text-[18px] leading-[25px] xl:text-[20px] xl:leading-[28px] mt-2">Client Satisfaction</p>
                </div>
            </div>

        </div>

    )
}
