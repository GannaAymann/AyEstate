"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export const RecentArticles = () => {
    const router = useRouter();
    return (
        <div className='px-[20px] mt-[50px] lg:mt-[100px] lg:px-[100px]'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='font-[700] text-[16px] lg:text-[32px] leading-[20px] lg:leading-[41px]'>Recently Articles</p>
                    <p className='font-[400] text-[12px] lg:text-[18px] leading-[19px] lg:leading-[31px] text-app-gray mt-[8px] lg:mt-[12px]  sm:w-full'>Newest update article from jobify</p>
                </div>
                <Button className="border-[1px] border-[#B7E08A] rounded-[12px] font-[600] text-[14px] lg:text-[18px] lg:w-[107px] lg:h-[47px] w-[82px] h-[30px] leading-[18px]" onClick={() => router.push("/blog/recent")}>View All</Button>
            </div>

            <div className='pt-[30px] lg:pt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[20px] sm:gap-x-[29px] pb-[49px] lg:pb-[100px] xl:pb-[200px]'>
                <div>
                    <Image
                        width={1240}
                        height={520}
                        src={"/images/recent1.png"}
                        alt="recent1"
                        className="w-full rounded-[16px] h-[260px]"

                    />
                    <div className='flex flex-row gap-x-[12px] mt-[16px] lg:mt-[24px]'>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px] leading-[15px] text-app-gray'>4 February 2024</p>
                        <p className='font-[400] text-[12px] xl:text-[18px]  lg:text-[16px] lg:leading-[20px] leading-[15px] text-app-gray'>.</p>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px] leading-[15px] text-app-gray'>Tips</p>
                    </div>
                    <p className='font-[700] text-[14px] xl:text-[24px] lg:text-[20px] lg:leading-[31px] leading-[18px] mt-[6px] lg:mt-[12px]'>15 Reasons Why Real Estate is the best investment</p>
                </div>

                <div>
                    <Image
                        width={1240}
                        height={520}
                        src={"/images/recent2.png"}
                        alt="recent1"
                        className="w-full rounded-[16px] h-[260px]"

                    />
                    <div className='flex flex-row gap-x-[12px] mt-[16px] lg:mt-[24px]'>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px]  leading-[15px] text-app-gray'>24 January 2024</p>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px]  leading-[15px] text-app-gray'>.</p>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px] leading-[15px] text-app-gray'>Success Stories</p>
                    </div>
                    <p className='font-[700] text-[14px] xl:text-[24px] lg:text-[20px] lg:leading-[31px] leading-[18px] mt-[6px] lg:mt-[12px]'>Renters are still moving-these markets are
                        where you should be investing</p>
                </div>

                <div>
                    <Image
                        width={1240}
                        height={520}
                        src={"/images/recent3.png"}
                        alt="recent1"
                        className="w-full rounded-[16px] h-[260px]"

                    />
                    <div className='flex flex-row gap-x-[12px] mt-[16px] lg:mt-[24px]'>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px] leading-[15px] text-app-gray'>21 January 2024</p>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px] leading-[15px] text-app-gray'>.</p>
                        <p className='font-[400] text-[12px] xl:text-[18px] lg:text-[16px] lg:leading-[20px] leading-[15px] text-app-gray'>Invest</p>
                    </div>
                    <p className='font-[700] text-[14px] xl:text-[24px] lg:text-[20px] lg:leading-[31px] leading-[18px] mt-[6px] lg:mt-[12px]'>Every major u.s. city where it’s more expensive
                        to rent than buy</p>
                </div>
            </div>
        </div>
    )
}
