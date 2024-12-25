import { Input } from '@/components/ui/input'
import React from 'react'
import { Search } from '../../../../public/icons/Search'
import { Account } from '../../../../public/icons/Account'
import { Text } from '../../../../public/icons/Text'
import { Video } from '../../../../public/icons/Video'


export const Help = () => {
    return (
        <div className='mt-[30px] xl:mt-[120px]'>
            <div className='text-center flex flex-col items-center'>
                <p className='font-[700] text-[24px] lg:text-[44px] lg:leading-[57px] leading-[31px]'>Helping you is our priority</p>
                <div className='relative w-[335px] lg:w-[820px] flex items-center flex-row mt-[16px] lg:mt-[50px]'>
                    <div className='pl-[14px] absolute'>
                        <Search />
                    </div>
                    <Input
                        className='rounded-[16px] bg-white py-[28px] border border-white pl-[45px] text-app-gray font-[400] text-[12px] '
                        placeholder='Search question'
                    />
                </div>

                <p className='font-[400] text-[12px] lg:text-[16px] lg:font-[600] leading-[19px] lg:mt-[24px] text-app-gray text-center w-[300px] md:w-full mt-[12px]'>*We are collect your searching keywords to improve our FAQ</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] lg:px-[80px] xl:px-[100px] mt-[50px] xl:mt-[100px] gap-y-[16px] lg:gap-y-0 md:gap-x-[16px] '>
                <div className='rounded-[16px] border-[1.5px] border-[#F9F9F9] bg-white flex flex-col items-center p-[16px] lg:p-[24px]'>
                    <Account />
                    <p className='font-[700] text-[16px] leading-[20px] mt-[16px] lg:text-[24px] lg:leading-[31px] xl:mt-[30px]'>My Account</p>
                    <p className='font-[400] text-[14px] leading-[22px] mt-[8px] xl:mt-[16px] text-center text-app-gray lg:text-[18px] lg:leading-[28px]'>From how to setup your account to how to apply for a job</p>
                </div>
                <div className='rounded-[16px] border-[1.5px] border-[#F9F9F9] bg-white flex flex-col items-center p-[16px] lg:p-[24px]'>
                    <Text />
                    <p className='font-[700] text-[16px] leading-[20px] mt-[16px] lg:text-[24px] lg:leading-[31px] xl:mt-[30px]'>Email Campaigns</p>
                    <p className='font-[400] text-[14px] leading-[22px] mt-[8px] xl:mt-[16px] text-center text-app-gray  lg:text-[18px] lg:leading-[28px]'>Engage your contacts using th ebest mobile- friendly email design tools</p>
                </div>
                <div className='rounded-[16px] border-[1.5px] border-[#F9F9F9] bg-white flex flex-col items-center p-[16px] lg:p-[24px] '>
                    <Video />
                    <p className='font-[700] text-[16px] leading-[20px] mt-[16px] lg:text-[24px] lg:leading-[31px] xl:mt-[30px]'>Luxury Properties</p>
                    <p className='font-[400] text-[14px] leading-[22px] mt-[8px] xl:mt-[16px] text-center text-app-gray lg:text-[18px] lg:leading-[28px]'>Learn everything about client declaration and partner management</p>
                </div>
            </div>
        </div>
    )
}
