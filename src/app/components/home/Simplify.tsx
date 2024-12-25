import React from 'react'
import { Note } from '../../../../public/icons/Note'
import { Button } from '@/components/ui/button'
import { LeftArrow } from '../../../../public/icons/LeftArrow'
import Image from 'next/image';
export const Simplify = () => {
    return (
        <div className='pt-[50px] px-[20px] lg:px-[50px] xl:px-[64px]'>
            <>
                <p className='text-[16px] font-[600] leading-[24px]'>Discover</p>
                <div className='flex flex-col lg:flex-row justify-between '>
                    <p className='text-[32px] lg:text-[48px] font-[700] leading-[38px] lg:leading-[57px] mt-[12px] lg:w-[616px]'>Find Your Dream Property with Us</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] leading-[21px] lg:leading-[27px] mt-[20px] lg:w-[616px]'>At our real estate agency, we offer a range of services to help you with your property needs. Whether you are looking to buy, sell, or get a valuation, our experienced team is here to assist you every step of the way.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-[48px] lg:gap-x-[48px] gap-y-[24px] lg:gap-y-0s'>
                    <div className='flex flex-col gap-y-[20px] lg:gap-y-[24px] '>
                        <Note />
                        <p className='text-[24px] font-[700] leading-[33px]'>Property Buying and Selling</p>
                        <p className='text-[16px] font-[400] leading-[24px]'>We provide expert guidance for buying and selling properties, ensuring a smooth and successful transaction.</p>
                    </div>
                    <div className='flex flex-col gap-y-[20px] lg:gap-y-[24px]'>
                        <Note />
                        <p className='text-[24px] font-[700] leading-[33px]'>Property Valuation Services</p>
                        <p className='text-[16px] font-[400] leading-[24px]'>Our team of certified appraisers offers accurate property valuations to help you make informed decisions.</p>
                    </div>
                    <div className='flex flex-col gap-y-[20px] lg:gap-y-[24px]'>
                        <Note />
                        <p className='text-[24px] font-[700] leading-[33px]'>Real Estate Investment Advice</p>
                        <p className='text-[16px] font-[400] leading-[24px]'>Get expert advice on real estate investment strategies to maximize your returns.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-x-[24px] xl:mt-[64px] mt-[40px]'>
                    <Button className='rounded-[12px] bg-app-lightgreen text-black hover:bg-app-lightgreen text-[16px] font-[600] leading-[24px]'>Learn More</Button>
                    <Button className='p-0 bg-transparent hover:bg-transparent text-black gap-x-[16px]'>Contact
                        <LeftArrow />
                    </Button>
                </div>
            </>
            <div className='mt-[100px] flex flex-col justify-center items-center '>
                <div className='flex flex-col justify-center items-center w-full text-center lg:w-[768px]'>
                    <p className="font-[600] text-[16px] leading-[24px]">Simplify</p>
                    <p className="font-[700] lg:text-[48px] text-[32px] lg:leading-[57px] leading-[38px] mt-[12px] lg:mt-[16px] ">Streamline Your Property Buying or Selling Process</p>
                    <p className="font-[400] lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] lg:mt-[24px] mt-[20px] ">Our website provides a step-by-step guide to help you seamlessly navigate the process of buying or selling property. From finding the perfect property to closing the deal, we have got you covered.</p>
                </div>
                <div className='mt-[48px] text-center grid grid-cols-1 lg:grid-cols-3 gap-y-[48px] lg:gap-y-0 lg:gap-x-[48px] '>
                    <div className='flex justify-center items-center flex-col'>
                        <Image
                            src="/images/home1.png"
                            alt="home1"
                            width={405}
                            height={240}

                        />
                        <p className='mt-[24px] font-[700] lg:text-[32px] lg:leading-[40px] text-[24px] leading-[33px]'>Find Your Dream Property</p>
                        <p className='mt-[20px] font-[400] text-[16px] leading-[24px]'>Browse through a wide selection of properties that match your preferences and requirements.</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <Image
                            src="/images/home2.png"
                            alt="home1"
                            width={405}
                            height={240}

                        />
                        <p className='mt-[24px] font-[700] lg:text-[32px] lg:leading-[40px] text-[24px] leading-[33px]'>Find Your Dream Property</p>
                        <p className='mt-[20px] font-[400] text-[16px] leading-[24px]'>Browse through a wide selection of properties that match your preferences and requirements.</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <Image
                            src="/images/home3.png"
                            alt="home1"
                            width={405}
                            height={240}

                        />
                        <p className='mt-[24px] font-[700] lg:text-[32px] lg:leading-[40px] text-[24px] leading-[33px]'>Find Your Dream Property</p>
                        <p className='mt-[20px] font-[400] text-[16px] leading-[24px]'>Browse through a wide selection of properties that match your preferences and requirements.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
