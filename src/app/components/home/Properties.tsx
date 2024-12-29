import React from 'react'
import data from "../../../../public/Data/dreamHome.json"
import Image from 'next/image';
import { Button } from '../../../components/ui/button';
interface IItem {
    id: string,
    title: string;
    prop: string;
    price: string;
    src: string
}
export const Properties = () => {
    return (
        <div className='py-[50px] px-[20px] flex flex-col justify-center items-center'>
            <div className='text-center'>
                <p className='font-[600] text-[16px] leading-[24px]'>Find</p>
                <p className='font-[700] text-[32px] lg:text-[40px] xl:text-[48px] leading-[38px] xl:leading-[57px] mt-[14px]'>Properties</p>
                <p className='mt-[20px] xl:mt-[24px] font-[400] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px]'>Explore our curated list of properties and find your dream home.</p>
            </div>
            <div className='mt-[48px] xl:mt-[80px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[25px] xl:gap-x-[32px] gap-y-[32px] xl:gap-y-[64px]'>
                {data.home.map((item: IItem, index) => (
                    <div key={index} className='text-center '>
                        <Image
                            src={item.src}
                            alt={item.title}
                            width={304}
                            height={364}

                        />
                        <p className='text-black font-[600] xl:text-[18px] text-[16px] leading-[24px] mt-[16px]'>{item.title}</p>
                        <p className='text-black font-[400] text-[14px] leading-[21px]' >{item.prop}</p>
                        <p className='text-black font-[600] text-[18px] leading-[21px] mt-[10px]'>{item.price}</p>
                        <Button className='border-[1px] border-black rounded-[12px] bg-transparent hover:bg-transparent w-full text-black mt-[16px]' aria-label="view">View Details</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
