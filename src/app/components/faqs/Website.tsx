'use client'
import React, { useState } from 'react'
import QuestionsData from "../../../../public/Data/website.json"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Add } from '../../../../public/icons/Add'
import { Minus } from '../../../../public/icons/Minus'
export const Website = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const handleOpenChange = (id: string | null) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <div className='mt-[100px] xl:mt-[224px] flex flex-col items-center'>
            <p className='font-[700] text-[24px] lg:text-[44px] lg:leading-[57px] leading-[31px] text-center'>Our Website</p>
            <p className='font-[400] text-[14px] lg:text-[18px] lg:mt-[30px] leading-[22px] text-app-gray text-center mt-[16px]'>Frequently asked question about my account</p>
            <div className='grid grid-cols-1 mt-[30px] lg:mt-[50px] gap-y-[16px] lg:gap-y-[30px] px-[20px] lg:px-[100px] w-full '>
                {QuestionsData.questions.map((item) => (
                    <Collapsible
                        open={openId === item.id}
                        onOpenChange={() => handleOpenChange(item.id)}
                        className=" border-[2px] border-[#F9F9F9] p-[20px] lg:p-[24px] rounded-[18px] bg-white "
                        key={item.id}
                    >
                        <div className="flex items-center justify-between ">
                            <p className='font-[700] text-[14px] lg:text-[24px] leading-[18px] lg:leading-[31px]'>
                                {item.question}
                            </p>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="p-0 bg-transparent hover:bg-transparent">
                                    {openId != null && openId === item.id ? (
                                        <Minus />
                                    ) : (<Add />)}

                                </Button>
                            </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent >
                            <p className='font-[400] text-[14px] lg:text-[18px] leading-[22px] text-app-gray mt-[16px]' >{item.answer}</p>
                            <p className=' text-app-lightgreen font-[700] text-start text-[16px] lg:text-[18px] leading-[20px] mt-[20px]'>Read More</p>
                        </CollapsibleContent>

                    </Collapsible>
                ))}
            </div>
            <Button className='bg-app-lightgreen hover:bg-app-lightgreen  text-black font-[600] text-[12px] leading-[15px] w-[335px] sm:w-[190px] rounded-[12px] mt-[24px] md:mt-[50px]'>Give a Quote</Button>
        </div>
    )
}
