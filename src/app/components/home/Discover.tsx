import { Button } from '@/components/ui/button'
import Image from 'next/image';
import React from 'react'

export const Discover = () => {
    return (
        <div className='flex flex-col bg-[#F6F3F3] pt-[50px] items-center justify-center lg:justify-around lg:flex-row lg:h-[600px] h-[805px]'>
            <div className='text-center lg:text-start flex flex-col '>
                <p className='text-[36px] xl:text-[56px] xl:leading-[68px] font-[700] leading-[43px] w-[300px] sm:w-[400px] md:w-[550px] xl:w-[616px]'>Discover Your Dream Home Today</p>
                <p className='text-[14px] xl:text-[18px] font-[400] leading-[24px] xl:leading:[50px] mt-[20px] xl:mt-[40px] w-[295px] sm:w-[400px] md:w-[550px] xl:w-[616px]'>Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition. Find your perfect home today!</p>
                <div className='flex flex-row items-center justify-center lg:items-start lg:justify-start gap-x-[16px] mt-[24px] xl:mt-[80px]'>
                    <Button className='rounded-[12px] bg-app-lightgreen text-black hover:bg-app-lightgreen text-[16px] font-[600] leading-[24px]' aria-label='explore'>Explore Now</Button>
                    <Button className='rounded-[12px] bg-transparent border-black border-solid border-[1px] text-black hover:bg-transparent text-[16px] font-[400] leading-[24px]' aria-label="learn">Learn More</Button>
                </div>
            </div>
            <div className='w-[335px] mt-[48px] sm:w-[400px] md:w-[500px]'>
                <Image
                    src="/images/livingroom.png"
                    alt="livingroom"
                    width={579}
                    height={500}

                />
            </div>
        </div>
    )
}
