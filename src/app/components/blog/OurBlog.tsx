'use client'
import React from 'react'
import { Search } from '../../../../public/icons/Search'
import { Input } from '@/components/ui/input'
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';


export const OurBlog = () => {
    const windowSize = useWindowSize();
    return (
        <div className='mt-[30px]'>
            <div className=' flex flex-col items-center justify-center'>
                <p className='font-[700] text-[24px] leading-[31px] text-center'>Our Blog</p>
                <div className='relative w-[335px] lg:w-[820px] flex items-center flex-row   mt-[16px]'>
                    <div className='pl-[14px] absolute'>
                        <Search />
                    </div>
                    <Input
                        className='rounded-[16px] bg-white py-[28px] border border-white pl-[45px] text-app-gray font-[400] text-[12px] '
                        placeholder='Search article'
                    />
                </div>
                <div className='flex flex-row gap-x-[16px] mt-[12px] lg:mt-[24px]'>
                    <p className='text-app-gray font-[400] lg:font-[600] text-[12px] lg:text-[16px] leading-[19px]'>Suggested:</p>
                    <p className='text-app-blue font-[400] lg:font-[600] text-[12px] lg:text-[16px] leading-[19px]'>Success Stories</p>
                    <p className='text-app-blue font-[400] lg:font-[600] text-[12px] lg:text-[16px] leading-[19px]'>Tips</p>
                    <p className='text-app-blue font-[400] lg:font-[600] text-[12px] lg:text-[16px] leading-[19px]'>Invest</p>
                </div>
            </div>

            <div className='flex flex-col  justify-center mt-[50px] lg:mt-[100px] md:flex-row gap-y-[30px] md:gap-y-0 md:gap-x-[50px] xl:gap-x-[30px] px-[20px] lg:px-[100px] sm:px-[50px] '>
                <div className=" bg-[url('/images/home4.png')] xl:w-[690px] xl:h-[588px] lg:w-[500px] lg:h-[350px] w-full h-[317px] relative rounded-[16px] " >
                    <div className='bottom-0 left-0 p-[16px] absolute'>
                        <div className='flex flex-row gap-x-[12px]'>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>8 Feb 2024</p>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>.</p>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>Success Stories</p>
                        </div>
                        <p className='text-[#FFFFFF] font-[700] text-[14px] xl:text-[28px] xl:leading-[36px] leading-[18px] mt-[6px]'>From $0 to $40 Million: How a 10-Year Old Orphan Became a Successful Investor</p>
                    </div>

                </div>
                <div className='flex flex-col  gap-y-[20px] lg:gap-y-[30px] '>
                    <div className='flex flex-row gap-x-[12px] lg:gap-x-[24px] '>
                        <Image
                            src={"/images/virtualHouse.png"}
                            width={windowSize.width && windowSize.width > 1280 ? 190 : 100}
                            height={windowSize.width && windowSize.width > 1280 ? 176 : 100}
                            alt='virtualHouse.png'
                        />
                        <div className='flex flex-col justify-center lg:w-[45%] w-full'>
                            <div className='flex flex-row gap-x-[12px]'>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>9 Sep 2022</p>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>.</p>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>Career Tips</p>
                            </div>
                            <p className='font-[700] text-[14px] xl:text-[20px] xl:leading-[26px] leading-[18px] mt-[6px] lg:mt-[12px] '>The Quick Guide To virtual
                                house flipping</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-[12px] lg:gap-x-[24px]'>
                        <Image
                            src={"/images/money.png"}
                            width={windowSize.width && windowSize.width > 1280 ? 190 : 100}
                            height={windowSize.width && windowSize.width > 1280 ? 176 : 100}
                            alt='money.png'
                        />
                        <div className='flex flex-col justify-center lg:w-[50%]  w-full'>
                            <div className='flex flex-row gap-x-[12px]'>
                                <p className='font-[400] xl:font-[600] xl:text-[16px]  text-[12px] leading-[15px] text-app-gray'>20 January 2024</p>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>.</p>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>Tips</p>
                            </div>
                            <p className='font-[700] text-[14px] xl:text-[20px] xl:leading-[26px] leading-[18px] mt-[6px] lg:mt-[12px] '>Expert Home Price Forecasts
                                For 2024 Revised Up</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-[12px] lg:gap-x-[24px] '>
                        <Image
                            src={"/images/home5.png"}
                            width={windowSize.width && windowSize.width > 1280 ? 190 : 100}
                            height={windowSize.width && windowSize.width > 1280 ? 176 : 100}
                            alt='home5.png'
                        />
                        <div className='flex flex-col justify-center lg:w-[50%] w-full'>
                            <div className='flex flex-row gap-x-[12px]'>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>15 January 2024</p>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>.</p>
                                <p className='font-[400] xl:font-[600] xl:text-[16px] text-[12px] leading-[15px] text-app-gray'>Tips</p>
                            </div>
                            <p className='font-[700] text-[14px] xl:text-[20px] xl:leading-[26px] leading-[18px] mt-[6px] lg:mt-[12px]  '>How to Choose the Right Real Estate Agent for Your Needs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
