import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import Star from '../../../../public/icons/Star'
export const FilterComponent = () => {
    return (
        <>
            <p className='font-[600] text-[20px] leading-[28px]'>Filter Option</p>
            <Separator className="bg-[#E4E9EE] w-full h-[1px] mt-[16px]" />
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-[16px] font-[700] leading-[22px]'>Best Filter</AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-y-[12px]'>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <Star />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">4 stars or upper</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Luxury Building</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Best Seller</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Discount</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-[16px] font-[700] leading-[22px]'>Location</AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-y-[12px]'>

                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Bandung</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Jakarta</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Bali</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Medan</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Surabaya</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Jogja</p>
                            </div>

                            <p className='text-[#1D9E34] font-[500] text-[16px] leading-[25px]'>Show All</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-[16px] font-[700] leading-[22px]'>Category</AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-y-[12px]'>

                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">House</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Villa</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Apartment</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Hotel</p>
                            </div>
                            <div className='flex gap-x-[6px] items-center'>
                                <Checkbox className="border-[#C4C8CC] rounded-[4px]" />
                                <p className="font-[400] text-[16] leading-[25px] text-app-gray">Real Estate</p>
                            </div>


                            <p className='text-[#1D9E34] font-[500] text-[16px] leading-[25px]'>Show All Categories</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-[16px] font-[700] leading-[22px]'>Price Range</AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-y-[12px]'>
                            <div className='border-[1px] border-[#E4E9EE] h-[48px] w-fit px-[16px] rounded-[12px] flex items-center justify-center'>

                                <p className="font-[400] text-[16] leading-[25px]">$0 - $5,000</p>
                            </div>
                            <div className='border-[1px] border-[#E4E9EE] h-[48px] w-fit px-[16px] rounded-[12px] flex items-center justify-center'>

                                <p className="font-[400] text-[16] leading-[25px]">$5,000 - $50,000</p>
                            </div>

                            <div className='border-[1px] border-[#E4E9EE] h-[48px] w-fit px-[16px] rounded-[12px] flex items-center justify-center'>

                                <p className="font-[400] text-[16] leading-[25px]"> $50,000</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
