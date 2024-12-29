import { Button } from '@/components/ui/button'
import { article } from "../../../../public/Data/recentArticle.json"
import Image from 'next/image';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "../../../components/ui/pagination"
import React from 'react'
import ArrowLeft from '../../../../public/icons/ArrowLeft';
import ArrowRight from '../../../../public/icons/ArrowRight';
import Link from 'next/link';

export const ViewAllRecent = () => {
    return (
        <div className="px-[20px] xl:px-[100px]">
            <div className='flex flex-row justify-between items-center mt-[34px]'>
                <div className='flex flex-col xl:gap-y-[12px] gap-y-[4px]'>
                    <p className='font-[700] text-[16px] xl:text-[32px] leading-[20px] xl:leading-[42px] '>Recent Articles</p>
                    <p className='font-[400] xl:text-[18px] text-[14px] leading-[32px] text-app-gray sm:block hidden'>Newest update article from AyEstate</p>
                </div>

                <Button className='border-[#B7E08A] border-[1px] rounded-[12px] font-[600] text-[14px] h-[30px] w-[82px] sm:hidden block'>View All</Button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[21px] gap-y-[20px] sm:gap-y-[30px] sm:gap-x-[29px]'>
                {article.map((item, index) => {
                    return (
                        <Link key={index} href={`/blog/recent/detail/${item.id}`}>
                            <Image

                                height={100}
                                width={100}
                                alt={item.imgsource}
                                src={item.imgsource}
                                className='w-full h-[260px] rounded-[16px] cursor-pointer'

                            />
                            <div className="flex gap-x-[12px] text-app-gray font-[400] text-[12px] mt-[16px] xl:text-[18px]">
                                <p>{item.title1}</p>
                                <p>.</p>
                                <p>{item.subtitle1}</p>
                            </div>
                            <p className='mt-[6px] font-[700] text-[14px] xl:text-[24px]'>{item.subtitle}</p>
                        </Link>
                    )
                })}
            </div>

            <Pagination className='mt-[50px] mb-[50px]'>
                <PaginationContent>

                    <PaginationItem>
                        <PaginationLink href="#" aria-label='back'>
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
                        <PaginationLink href="#" aria-label='next'>
                            <ArrowRight />
                        </PaginationLink>
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>

    )
}
