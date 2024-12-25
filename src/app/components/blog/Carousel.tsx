"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const Carousel = () => {

    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper pb-24  "
            style={{ paddingBottom: "40px" }}
        >
            <SwiperSlide >
                <div className={` bg-[url('/images/houseImage.png')]  relative rounded-[16px]  w-full h-[317px] mt-[30px] `} >
                    <div className='bottom-0 left-0 p-[16px] absolute flex flex-col lg:gap-y-[12px] gap-y-[6px]'>
                        <div className='flex flex-row gap-x-[12px] '>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>23 Des 2023</p>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>.</p>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>Success Stories</p>
                        </div>
                        <p className='text-[#FFFFFF] font-[700] text-[14px] xl:text-[28px] xl:leading-[36px] leading-[18px] '>Luxury Living: Exploring High-End Real Estate Markets</p>
                        <p className="text-[#FFFFFF] font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]">Feeling like work is a constant source of stress? You’re not...</p>
                    </div>

                </div>
            </SwiperSlide>

            <SwiperSlide >
                <div className={` bg-[url('/images/house2image.png')] relative rounded-[16px]  w-full h-[317px] mt-[30px] `} >
                    <div className='bottom-0 left-0 p-[16px] absolute flex flex-col lg:gap-y-[12px] gap-y-[6px]'>
                        <div className='flex flex-row gap-x-[12px] '>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>9 Nov 2023</p>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>.</p>
                            <p className='text-white font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]'>Tips</p>
                        </div>
                        <p className='text-[#FFFFFF] font-[700] text-[14px] xl:text-[28px] xl:leading-[36px] leading-[18px] '>Short vs. Long-Term Real Estate Investing</p>
                        <p className="text-[#FFFFFF] font-[400] xl:font-[600] xl:text-[18px] text-[12px] leading-[15px]">Whether you’re speaking with the recruiter or you are final...</p>
                    </div>

                </div>
            </SwiperSlide>
        </Swiper>
    )
}
