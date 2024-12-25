'use client'
import React from 'react'
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';
import Email from '../../../../public/icons/Email';
import Address from '../../../../public/icons/Address';
import Support from '../../../../public/icons/Support';
export const CustomerService = () => {
    const windowSize = useWindowSize();
    return (
        <div className='pt-[30px] px-[20px] xl:pt-[120px] md:pt-[50px] '>
            <div className='text-center flex flex-col items-center'>
                <p className='text-[24px] font-[700] leading-[31px] lg:text-[44px] lg:leading-[57px]'>Excelent customer service</p>
                <p className='text-[14px] text-app-gray font-[400] leading-[22px] md:w-[610px] lg:w-[761px] mt-[16px] lg:mt-[30px] lg:text-[18px] lg:leading-[28px] '>If you have any questions you can report them below with the following information, so that it is easy for us to reply to your message.</p>
                <Image
                    width={1240}
                    height={520}
                    src={windowSize.width && windowSize.width > 640 ? "/images/maps.png" : "/images/mobileMap.png"}
                    alt="maps"
                    className='mt-[50px]'
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[50px] lg:pt-[100px] gap-y-[16px] lg:gap-y-0 md:gap-x-[16px]">
                <div className='flex flex-col items-center text-center border-[1.5px] border-[#F9F9F9] rounded-[16px] py-[16px] xl:py-[35px]'>
                    <Email width={windowSize.width && windowSize.width < 640 ? 46 : 76} height={windowSize.width && windowSize.width < 640 ? 46 : 76} color={windowSize.width && windowSize.width < 640 ? "#B7E08A" : "#111"} />
                    <p className='text-[16px] lg:text-[24px] lg:leading-[31px] font-[700] leading-[20px] mt-[16px]'>Email Us</p>
                    <p className='text-[14px] font-[400] lg:text-[18px] lg:leading-[28px] leading-[22px] text-app-gray mt-[8px] xl:w-[352px]'>Ask us a question by email and we will respond within a few days.</p>
                    <p className='text-[14px] lg:text-[16px] lg:leading-[20px] font-[700] leading-[18px] text-app-lightgreen lg:text-black mt-[16px]'>Leave a messages</p>
                </div>

                <div className='flex flex-col items-center text-center border-[1.5px] border-[#F9F9F9] rounded-[16px] py-[16px] xl:py-[35px]'>
                    <Address width={windowSize.width && windowSize.width < 640 ? 46 : 76} height={windowSize.width && windowSize.width < 640 ? 46 : 76} color={windowSize.width && windowSize.width < 640 ? "#B7E08A" : "#111"} />
                    <p className='text-[16px] lg:text-[24px] lg:leading-[31px] font-[700] leading-[20px] mt-[16px]'>Official Office</p>
                    <p className='text-[14px] lg:text-[18px] lg:leading-[28px] font-[400] leading-[22px] text-app-gray mt-[8px] xl:w-[352px]'>You can meet us at our office and discuss the details of your question.</p>
                    <p className='text-[14px] lg:text-[16px] lg:leading-[20px] font-[700] leading-[18px] text-app-lightgreen lg:text-black mt-[16px]'>Get Directions</p>
                </div>

                <div className='flex flex-col items-center text-center border-[1.5px] border-[#F9F9F9] rounded-[16px] py-[16px] xl:py-[35px]'>
                    <Support width={windowSize.width && windowSize.width < 640 ? 46 : 76} height={windowSize.width && windowSize.width < 640 ? 46 : 76} color={windowSize.width && windowSize.width < 640 ? "#B7E08A" : "#111"} />
                    <p className='text-[16px] lg:text-[24px] lg:leading-[31px] font-[700] leading-[20px] mt-[16px]'>Customer Support</p>
                    <p className='text-[14px] font-[400] lg:text-[18px] lg:leading-[28px] leading-[22px] text-app-gray mt-[8px] xl:w-[352px]'>Call us if your question requires an immediate response.</p>
                    <p className='text-[14px] lg:text-[16px] lg:leading-[20px] font-[700] leading-[18px] text-app-lightgreen lg:text-black mt-[16px]'>+(632) 3892402</p>
                </div>
            </div>
        </div>
    )
}
