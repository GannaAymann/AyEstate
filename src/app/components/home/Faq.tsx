'use client'
import React, { useState } from 'react'
import QuestionsData from "../../../../public/Data/questions.json"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Add } from '../../../../public/icons/Add'
import { Minus } from '../../../../public/icons/Minus'
export const Faq = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const handleOpenChange = (id: string | null) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <div className='flex flex-col items-center px-[20px] py-[45px] xl:py-[100px] '>
            <div className='  text-center'>
                <p className='text-[#F59A74] font-[600] text-[18px] leading-[24px]'>F A Q</p>
                <p className='text-black font-[700] text-[24px] xl:text-[44px] leading-[31px] xl:leading-[57px] mt-[20px]'>frequently asked question</p>
                <p className='text-app-gray font-[400] text-[14px] xl:text-[18px] xl:leading-[28px] leading-[22px] mt-[16px] xl:mt-[30px]'>Did you find the question as you expected?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[20px] mt-[25px] xl:mt-[53px]'>
                {QuestionsData.questions.map((item) => (
                    <Collapsible
                        open={openId === item.id}
                        onOpenChange={() => handleOpenChange(item.id)}
                        className=" border-[2px] border-[#F6F8F9] p-[20px] rounded-[18px] xl:w-[610px] "
                        key={item.id}
                    >
                        <div className="flex items-center justify-between ">
                            <p className='text-black font-[700] text-[14px] md:text-[20px] sm:text-[18px] md:leading-[26px] leading-[18px] '>
                                {item.question}
                            </p>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" aria-label={`${item.question}`} size="sm" className="p-0 bg-transparent hover:bg-transparent">
                                    {openId != null && openId === item.id ? (
                                        <Minus />
                                    ) : (<Add />)}

                                </Button>
                            </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent >
                            <p className='text-app-gray font-[600] text-start text-[18px] leading-[32px] mt-[16px]'>{item.answer}</p>
                            <p className='lg:text-app-blue text-app-lightgreen font-[700] text-start text-[18px] leading-[23px] mt-[20px]'>Read More</p>
                        </CollapsibleContent>

                    </Collapsible>
                ))}
            </div>
            <Button className='bg-app-lightgreen hover:bg-app-lightgreen  text-black font-[600] text-[12px] leading-[15px] w-[335px] sm:w-[190px] rounded-[12px] mt-[24px] md:mt-[50px]'>Give a Quote</Button>
        </div>
    )
}
