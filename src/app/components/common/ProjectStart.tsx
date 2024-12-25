import { Button } from '@/components/ui/button'
import React from 'react'

export const ProjectStart = () => {

    return (
        <div className='flex items-center flex-col bg-[#111111] text-center py-[40px] px-[25px]'>
            <p className='text-[#FFFFFF] sm:text-white font-[700] text-[20px] leading-[30px]  '>LET’S START A <br />
                SUCCESSFUL PROJECT</p>
            <p className='text-[#C7C1EA] sm-text-white font-[400] text-[12px] leading-[18px] mt-[12px] md:w-[470px] '>We deliver immediate business impact and long-term ROI for your brand.
                Find out why Astheris are Australia is trusted Digital Agency.</p>
            <Button className='text-black bg-app-lightgreen hover:bg-app-lightgreen font-[600] text-[14px] leading-[20px] mt-[12px] rounded-[40px] w-[335px] sm:w-[212px]'>Start A Project</Button>
        </div>
    )
}
