
import React from 'react'
import { Stars } from '../../../../public/icons/Stars'
import Image from 'next/image';
export const Testimonials = () => {
    return (

        <div className='bg-[#FFEEEE] text-center py-[50px]  '>
            <p className='text-black font-[700] text-[24px] leading-[28px] '>Customer Testimonials</p>
            <div className='mt-[24px] flex flex-col items-center '>
                <Stars />
                <p className='text-black font-[700] text-[20px] xl:text-[24px] leading-[28px] xl:leading-[33px] mt-[24px] w-[335px] sm:w-[500px] lg:w-[768px] '>Our experience with this real estate website design has been nothing short of amazing. The team was professional, responsive, and delivered beyond our expectations.</p>
                <div className='flex flex-col items-center mt-[24px] lg:flex-row  lg:gap-x-[20px] gap-x-0'>
                    <Image
                        src="/images/Avatar.png"
                        alt="Avatar"
                        width={56}
                        height={56}

                    />
                    <div className='flex flex-col mt-[16px] lg:items-start'>
                        <p className='text-black font-[600] text-[16px] leading-[24px] '>John Doe</p>
                        <p className='text-black font-[400] text-[16px] leading-[24px] '>CEO, ABC Realty</p>
                    </div>
                </div>
            </div>

        </div>



    )
}
