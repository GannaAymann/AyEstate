"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { Carousel } from './Carousel'
import useWindowSize from '@/hooks/useWindowSize';

export const PopularArticles = () => {
    const windowSize = useWindowSize();

    return (
        <div className='px-[20px] mt-[50px] lg:mt-[100px] lg:px-[100px]'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='font-[700] text-[16px] lg:text-[32px] leading-[20px] lg:leading-[41px]'>Popular Articles</p>
                    <p className='font-[400] text-[12px] lg:text-[18px] leading-[19px] lg:leading-[31px] text-app-gray mt-[8px] lg:mt-[12px]  sm:w-full'>We provide blog that help start your career on AyEstate</p>
                </div>
                <Button className="border-[1px] border-[#B7E08A] rounded-[12px] font-[600] text-[14px] lg:text-[18px] lg:w-[107px] lg:h-[47px] w-[82px] h-[30px] leading-[18px]">View All</Button>
            </div>
            {windowSize.width && windowSize.width < 640 ? (
                <Carousel />
            ) : (
                <div className='flex flex-row gap-x-[20px] '>
                    <div className={` bg-[url('/images/houseImage.png')]  relative rounded-[16px]  w-[605px] xl:h-[502px] lg:h-[400px] h-[300px] mt-[30px] lg:mt-[50px]`} >
                        <div className='bottom-0 left-0 p-[16px] absolute flex flex-col lg:gap-y-[12px] gap-y-[6px]'>
                            <div className='flex flex-row gap-x-[12px] '>
                                <p className='text-white font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]'>23 Des 2023</p>
                                <p className='text-white font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]'>.</p>
                                <p className='text-white font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]'>Success Stories</p>
                            </div>
                            <p className='text-[#FFFFFF] font-[700] text-[14px] lg:text-[20px] xl:text-[28px] xl:leading-[36px] lg:leading-[25px] leading-[18px] '>Luxury Living: Exploring High-End Real Estate Markets</p>
                            <p className="text-[#FFFFFF] font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]">Feeling like work is a constant source of stress? You’re not...</p>
                        </div>

                    </div>
                    <div className={` bg-[url('/images/house2image.png')] relative rounded-[16px]   w-[605px] xl:h-[502px] lg:h-[400px] h-[300px] mt-[30px] lg:mt-[50px]`} >
                        <div className='bottom-0 left-0 p-[16px] absolute flex flex-col lg:gap-y-[12px] gap-y-[6px]'>
                            <div className='flex flex-row gap-x-[12px] '>
                                <p className='text-white font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]'>9 Nov 2023</p>
                                <p className='text-white font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]'>.</p>
                                <p className='text-white font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]'>Tips</p>
                            </div>
                            <p className='text-[#FFFFFF] font-[700] text-[14px] lg:text-[20px] xl:text-[28px] xl:leading-[36px] lg:leading-[25px] leading-[18px]'>Short vs. Long-Term Real Estate Investing</p>
                            <p className="text-[#FFFFFF] font-[400] xl:font-[600] xl:text-[18px] lg:text-[16px] text-[12px] leading-[15px]">Whether you’re speaking with the recruiter or you are final...</p>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}
