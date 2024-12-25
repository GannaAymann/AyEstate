"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import Filter from '../../../../public/icons/Filter'
import { Button } from '@/components/ui/button'
import SearchBox from '../../../../public/icons/SearchBox'
import Menu from '../../../../public/icons/Menu'
import data from "../../../../public/Data/listing.json"
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';
import Bath from '../../../../public/icons/Bath';
import Villa from '../../../../public/icons/Villa';
import Bed from '../../../../public/icons/Bed';
import Frame from '../../../../public/icons/Frame';
import ArrowLeft from '../../../../public/icons/ArrowLeft';
import ArrowRight from '../../../../public/icons/ArrowRight';
import { FilterComponent } from './FilterComponent'
export const Listing = () => {
    const windowSize = useWindowSize();
    return (
        <div className="px-[20px] lg:px-[80px] xl:px-[120px]">
            <div className='flex flex-col lg:flex-row lg:justify-between mt-[61px] gap-y-[24px] lg:gap-y-0'>
                <div className='flex flex-col gap-y-[4px]'>
                    <p className='font-[600] text-[16px] lg:text-[24px] lg:leading-[33px] leading-[22px]'>Showing listings properties for “Villa”</p>
                    <p className='font-[400] text-[12px] lg:text-[16px] lg:leading-[25px] leading-[19px] text-app-gray'>Showing 1 - 60 Properties</p>
                </div>

                <div className="flex justify-between gap-x-[8px] ">
                    <div className='flex gap-x-[4px] items-center'>
                        <p className='font-[400] text-[16px] leading-[25px] text-app-gray hidden sm:block'>Sort By:</p>
                        <Select>
                            <SelectTrigger className="w-[180px] rounded-[8px] border-[#E4E9EE]">
                                <SelectValue placeholder="Relevant Products" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup className="bg-white">
                                    <SelectLabel>Relevant Products</SelectLabel>
                                    <SelectItem value="home1">home1</SelectItem>
                                    <SelectItem value="home2">home2</SelectItem>
                                    <SelectItem value="home3">home3</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex gap-x-[8px] items-center">
                        <DropdownMenu >
                            <DropdownMenuTrigger asChild className="block sm:hidden">
                                <Button className="border-[#E4E9EE] border-[1px] rounded-[8px] p-[6px]" variant="ghost">
                                    <Filter />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white">
                                <div className=' p-[24px] border-[1px] rounded-[12px] border-[#E4E9EE]'>

                                    <FilterComponent />
                                </div>

                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Separator orientation="vertical" className="bg-[#E4E9EE] w-[1px] h-[24px] block sm:hidden" />
                        <SearchBox />
                        <Button className="border-[#E4E9EE] border-[1px] rounded-[8px] p-[6px]" variant="ghost">
                            <Menu />
                        </Button>

                    </div>
                </div>

            </div>


            <div className='flex flex-row gap-x-[40px] sm:mt-[30px] lg:mt-[52px] items-center justify-center sm:items-start sm:justify-start'>

                <div className='w-[278px] hidden sm:block p-[24px] border-[1px] rounded-[12px] border-[#E4E9EE]'>
                    <FilterComponent />
                </div>
                <div className='grid grid-cols-2  gap-y-[24px] gap-x-[16px] items-center  mt-[24px] md:mt-0'>
                    {data.listing.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                width={156}
                                height={130}
                                className="rounded-[8px] w-[156px] lg:w-[429px] sm:w-[240px] h-[130px] lg:h-[400px] sm:h-[200px]"

                            />
                            {windowSize.width && windowSize.width > 768 ? (
                                <p className='font-[600] xl:text-[22px] text-[18px] leading-[33px] mt-[16px]'>{item.title}</p>
                            ) : (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="text-left  font-[600] text-[12px] leading-[16px] mt-[8px]">
                                            {item.title.substring(0, 20) + '...'}
                                        </TooltipTrigger>
                                        <TooltipContent className="w-9/12 bg-sky-900 leading-tight text-white">
                                            {item.title}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                            <p className='font-[600] text-[10px] lg:text-[18px] lg:leading-[27px] leading-[15px] lg:mt-[8px] '>{item.subtitle}</p>
                            <p className='font-[400] text-[8px] lg:text-[14px] lg:leading-[21px] leading-[12px] '>{item.country}</p>
                            <div className='flex flex-col gap-y-[9px] mt-[8px] lg:flex-row lg:gap-x-[7px] lg:gap-y-0 '>
                                <div className='flex gap-x-[7px]'>
                                    <div className='flex gap-x-[3px] items-center'>
                                        <Villa />
                                        <p className='font-[400] text-[10px] leading-[12px] text-app-gray'>Villa</p>
                                    </div>
                                    <div className='flex gap-x-[3px] items-center'>
                                        <Bath />
                                        <p className='font-[400] text-[10px] leading-[12px] text-app-gray'>2</p>
                                    </div>
                                    <div className='flex gap-x-[3px] items-center'>
                                        <Bed />
                                        <p className='font-[400] text-[10px] leading-[12px] text-app-gray'>4</p>
                                    </div>
                                </div>
                                <div className='flex gap-x-[7px]'>
                                    <div className='flex gap-x-[3px] items-center'>
                                        <Frame />
                                        <p className='font-[400] text-[10px] leading-[12px] text-app-gray'>1400m2</p>
                                    </div>
                                    <div className='flex gap-x-[3px] items-center'>
                                        <Bed />
                                        <p className='font-[400] text-[10px] leading-[12px] text-app-gray'>4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <Pagination className='mt-[50px] mb-[50px]'>
                <PaginationContent>

                    <PaginationItem>
                        <PaginationLink href="#">
                            <ArrowLeft />
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='bg-[#F9F9F9] text-app-gray hover:bg-app-lightgreen hover:text-black rounded-[8px]'>
                        <PaginationLink href="#" >1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='bg-[#F9F9F9] text-app-gray hover:bg-app-lightgreen hover:text-black rounded-[8px]'>
                        <PaginationLink href="#" >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='bg-[#F9F9F9] text-app-gray hover:bg-app-lightgreen hover:text-black rounded-[8px]'>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='bg-[#F9F9F9] text-app-gray hover:bg-app-lightgreen hover:text-black rounded-[8px]'>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            <ArrowRight />
                        </PaginationLink>
                    </PaginationItem>

                </PaginationContent>
            </Pagination>

        </div>
    )
}
