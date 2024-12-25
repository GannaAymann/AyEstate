import React from 'react'
import Medal from '../../../../public/icons/Medal'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import UpArrow from '../../../../public/icons/UpArrow'
import Facebook from '../../../../public/icons/Facebook'
import Netflix from '../../../../public/icons/Netflix'
import Amazon from '../../../../public/icons/Amazon'
import Youtube from '../../../../public/icons/Youtube'
import Google from '../../../../public/icons/Google'

export const Achievement = () => {

    const Achievements = [
        {
            title: "Best Small Companies",
            desc: "Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros."
        }, {
            title: "Fast Company Growth",
            desc: "Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros."
        }, {
            title: "Best Development Team",
            desc: "Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros."
        }
    ]

    return (
        <div className='bg-[#16112F] text-white px-[20px] pt-[40px] pb-[64px] lg:px-[120px] lg:py-[80px] lg:mt-[178px] mt-[70px]'>
            <p className='bg-[#FFFFFF1A] text-[#F4F2FF] rounded-[50px] px-[16px] py-[6px] w-[139px] font-[600] text-[14px] leading-[20px] text-center xl:text-[16px] xl:leading-[24px]'>Achievement</p>
            <div className='flex flex-col gap-y-[16px] mt-[16px] lg:mt-[61px] lg:flex-row lg:gap-y-0 lg:justify-between '>
                <p className='font-[700] text-[27px] xl:text-[36px]  leading-[36px] text-[#F4F2FF]'>OUR AWARD THIS YEAR</p>
                <p className='font-[400] text-[14px] xl:text-[18px] xl:leading-[25px] leading-[20px] text-app-lightBlue xl:w-[560px] lg:w-[390px]'>We’re happy to receive this award so that it motivates us to grow and provide the best service for you.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-[67px] mt-[40px] lg:mt-[60px] lg:gap-y-0 lg:gap-x-[70px]">
                {Achievements.map((achievement, index) => (
                    <div key={index} >
                        <Medal />
                        <p className='mt-[27px] font-[700] text-[20px] xl:text-[28px] xl:leading-[36px] leading-[30px]'>{achievement.title}</p>
                        <p className='mt-[13px] font-[400] text-[14px] leading-[20px] text-app-lightBlue'>{achievement.desc}</p>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center border-[1px] rounded-[40px] mt-[40px] flex-row gap-x-[10px] xl:gap-x-[14px] sm:w-[184px] w-full'>
                    <Button className='bg-transparent p-0 font-[600] text-[14px] leading-[20px]' >View All Project</Button>
                    <UpArrow />
                </div>
            </div>


            <Separator className="h-[1px] w-full bg-app-darkGray mt-[16px]" />
            <div className='mt-[16px] lg:mt-[30px] xl:mt-[60px]'>
                <p className='font-[400] text-[12px] lg:text-[18px] lg:leading-[28px] leading-[18px] text-app-lightBlue text-center'>We’ve built with the most growth company around the world</p>
                <div className='flex flex-row flex-wrap justify-center items-center  mt-[37px] xl:mt-[66px] gap-y-[46px] lg:gap-y-0 gap-x-[41px] lg:gap-x-[60px] xl:gap-x-[96px]'>
                    <Facebook />
                    <Netflix />
                    <Amazon />
                    <Youtube />
                    <Google />
                </div>
            </div>

        </div>
    )
}
