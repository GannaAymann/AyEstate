"use client"
import React from 'react'
import Logo from '../../../../public/icons/Logo'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

export const Footer = () => {
    const router = useRouter();
    return (
        <div className='bg-[#111111] py-[50px] px-[20px] xl:py-[100px] xl:px-[100px] '>
            <div className='flex flex-col  xl:flex-row xl:justify-between xl:gap-x-[230px]'>
                <div>
                    <Logo color='white' />
                    <p className='font-[400] text-[14px] leading-[22px] text-app-gray mt-[16px]'>hello.ayestate@example.com</p>
                    <p className='font-[400] text-[14px] leading-[22px] text-app-gray'>(+1) 2345 6789</p>

                    <p className='font-[400] text-[14px] leading-[22px] text-app-gray mt-[16px]'>4140 Parker Rd. Allentown</p>
                    <p className='font-[400] text-[14px] leading-[22px] text-app-gray'>New Mexico 31134</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-white  mt-[60px] xl:mt-0 gap-y-[30px] md:gap-y-0 xl:gap-x-[80px] md:gap-x-[40px]'>
                    <div className='flex flex-col text-center items-start'>
                        <p className='font-[700] text-[16px] xl:text-[18px] leading-[20px]'>Pages</p>
                        <div className='flex flex-col gap-y-[12px] mt-[16px] items-start'>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Listings</Button>
                            <Button className=' p-0 h-fit font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] text-app-gray '>About us</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Blog</Button>
                        </div>

                    </div>
                    <div className='flex flex-col text-center items-start'>
                        <p className='font-[700] text-[16px] xl:text-[18px] leading-[20px]'>Support</p>
                        <div className='flex flex-col gap-y-[12px] mt-[16px] items-start'>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Properties</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray' onClick={() => router.push("/faqs")}>FAQ</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Contact Us</Button>
                        </div>

                    </div>
                    <div className='flex flex-col text-center items-start'>
                        <p className='font-[700] text-[16px] xl:text-[18px] leading-[20px]'>Legal</p>
                        <div className='flex flex-col gap-y-[12px] mt-[16px] items-start'>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Style Guide</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Changelog</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Licensing</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Instructions</Button>
                        </div>

                    </div>
                    <div className='flex flex-col text-center items-start'>
                        <p className='font-[700] text-[16px] xl:text-[18px] leading-[20px]'>Platform</p>
                        <div className='flex flex-col gap-y-[12px] mt-[16px] items-start'>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Official Website</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>Play Store</Button>
                            <Button className=' p-0 font-[400] text-[14px]  leading-[22px] xl:font-[500] xl:text-[18px] xl:leading-[33px] h-fit text-app-gray'>App Store</Button>
                        </div>

                    </div>
                </div>
            </div>
            <p className='text-app-gray text-center mt-[50px] font-[400] text-[14px]  leading-[22px]'>Copyright © AyEstate | Designed by AY Studio</p>
        </div>

    )
}
