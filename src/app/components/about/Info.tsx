import React from 'react'
import Image from 'next/image';
export const Info = () => {
    const array = [
        {
            percentage: "800+",
            title: "Succesfull Project"
        }, {
            percentage: "600+",
            title: "Satisfied Client"
        }, {
            percentage: "150+",
            title: "Awwards Winners"
        }
    ]
    return (
        <div>
            <Image
                width={1240}
                height={520}
                src={"/images/About.png"}
                alt="about"
                className="w-full"

            />

            <div className="flex flex-col px-[20px] lg:px-[50px] xl:px-[100px] mt-[20px] lg:mt-[100px] gap-y-[20px] lg:flex-row lg:justify-between lg:gap-x-[15px]">
                <div className="flex gap-x-[11px] lg:gap-x-[40px]">
                    {array.map((item, index) => (
                        <div key={index} className='flex flex-col gap-y-[6px] xl:gap-y-[12px]'>
                            <p className='font-[700] text-[16px] leading-[24px] md:text-[20px] lg:text-[28px] lg:leading-[36px]'>{item.percentage}</p>
                            <p className='font-[400] text-[12px] lg:text-[18px] lg:leading-[28px] leading-[18px] text-app-darkGray'>{item.title}</p>
                        </div>
                    ))}

                </div>
                <p className='font-[400] text-[14px] leading-[20px] text-app-darkGray lg:w-[488px] lg:text-[18px] lg:leading-[28px]'>
                    We are a diverse group of real estate agent with different skills who make things people love to use. We help the world’s most solve problems and generate growth real estate.
                </p>
            </div>


        </div>
    )
}
