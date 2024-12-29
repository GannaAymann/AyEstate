import React from 'react'
import { team } from "../../../../public/Data/team.json"
import Image from 'next/image';
import Linkedin from '../../../../public/icons/Linkedin';
import Twitter from './../../../../public/icons/Twitter';
import Global from '../../../../public/icons/Global';
import Link from 'next/link';
export const Services = () => {
    return (
        <div className='mt-[40px] px-[20px] xl:px-[64px] lg:mt-[100px] xl:mt-[180px]'>
            <div className='text-center flex flex-col items-center gap-y-[15px]'>
                <p className=' w-[104px] bg-[#F4F2FF] text-[#5A48C3] px-[16px] py-[6px] rounded-[50px] font-[600] text-[14px] lg:text-[16px] leading-[20px]'>Services</p>
                <p className='font-[700] text-[28px] xl:text-[36px] xl:leading-[54px] leading-[36px] text-black'>MEET OUR CREATIVE TEAM</p>
                <p className='font-[400] text-[14px] leading-[20px] xl:text-[18px] xl:leading-[24px] ' >Magna metus, adipiscing dictumst magna fringilla metus fermentum tristique. Enim vitae purus lectus augue maecenas</p>
            </div>
            <div className='grid grid-cols-1 gap-y-[30px] mt-[20px] xl:mt-[120px] lg:mt-[80px] md:mt-[50px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-[32px]'>
                {team.map((member) => (
                    <div key={member.id} className='flex flex-col items-center'>
                        <Image
                            src={member.image}
                            width={80}
                            height={80}
                            alt={`${member.name}`}

                        />

                        <p className='mt-[16px] font-[700] text-[16px] leading-[24px] xl:text-[20px]'>{member.name}</p>
                        <p className='mt-[8px] font-[400] text-[14px] xl:text-[18px] leading-[20px]'>{member.title}</p>
                        <p className='mt-[8px] lg:mt-[16px] font-[400] text-[14px] xl:text-[16px] leading-[20px] text-center'>{member.desc}</p>
                        <div className='flex flex-row gap-x-[17px] items-center mt-[24px]'>
                            <Link href={"/linked"} aria-label='linkedin'><Linkedin /></Link>
                            <Link href={"/twitter"} aria-label='twitter'><Twitter /></Link>
                            <Link href={"/google"} aria-label='google'><Global /></Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
