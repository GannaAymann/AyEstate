import React from 'react'
import { Account } from '../../../../public/icons/Account'
import { Text } from '../../../../public/icons/Text'
import { SecGlobal } from '../../../../public/icons/SecGlobal'

export const Contacts = () => {
    return (
        <div className='mt-[53px] xl:mt-[200px] flex flex-col items-center mb-[100px] xl:mb-[200px]'>
            <p className='text-center font-[700] text-[24px] leading-[31px] lg:text-[44px] lg:leading-[57px]'>Still Have a question?</p>
            <p className='text-center font-[400] text-[14px] leading-[22px] lg:text-[18px] lg:leading-[28px] text-app-gray mt-[16px] lg:mt-[30px] px-[20px] lg:w-[727px] lg:px-0'>If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!</p>
            <div className='grid grid-cols-1 gap-y-[16px] mt-[50px] md:grid-cols-2 gap-x-[16px] xl:grid-cols-3 xl:gap-y-0'>
                <div className='rounded-[16px] border-[1.5px] border-[#F9F9F9] bg-white flex flex-col items-center p-[16px] lg:p-[24px]'>
                    <Account color='#B7E08A' />
                    <p className='font-[700] text-[16px] leading-[20px] mt-[16px] lg:text-[24px] lg:leading-[31px] xl:mt-[30px]'>+(1) 2345 6789</p>
                    <p className='font-[400] text-[14px] leading-[22px] mt-[8px] xl:mt-[16px] text-center text-app-gray lg:text-[18px] lg:leading-[28px]'>Our 24/7 Customer Services</p>
                </div>
                <div className='rounded-[16px] border-[1.5px] border-[#F9F9F9] bg-white flex flex-col items-center p-[16px] lg:p-[24px]'>
                    <Text color='#B7E08A' />
                    <p className='font-[700] text-[16px] leading-[20px] mt-[16px] lg:text-[24px] lg:leading-[31px] xl:mt-[30px]'>support@ayestate.com</p>
                    <p className='font-[400] text-[14px] leading-[22px] mt-[8px] xl:mt-[16px] text-center text-app-gray lg:text-[18px] lg:leading-[28px]'>Alternative way to get anwser faster.</p>
                </div>
                <div className='rounded-[16px] border-[1.5px] border-[#F9F9F9] bg-white flex flex-col items-center p-[16px] lg:p-[24px]'>
                    <SecGlobal />
                    <p className='font-[700] text-[16px] leading-[20px] mt-[16px] lg:text-[24px] lg:leading-[31px] xl:mt-[30px]'>Real Estate Management</p>
                    <p className='font-[400] text-[14px] leading-[22px] mt-[8px] xl:mt-[16px] text-center text-app-gray lg:text-[18px] lg:leading-[28px]'>Our community ready to help you</p>
                </div>
            </div>
        </div>
    )
}
