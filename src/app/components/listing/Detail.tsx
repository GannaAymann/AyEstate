import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ArrowRight from '../../../../public/icons/ArrowRight';
export const Detail = () => {
    return (
        <div className='px-[20px] lg:px-[64px] mt-[50px]'>
            <div className='flex flex-col lg:flex-row lg:gap-x-[220px]  gap-y-[48px]'>
                <div className='flex flex-col gap-y-[20px]'>
                    <p className='font-[700] text-[40px] leading-[48px]'>Luxury Beach Villa</p>
                    <p className='font-[400] text-[16px] leading-[24px]'>Experience the ultimate in beachfront luxury with breathtaking ocean views.</p>
                    <div className='flex gap-x-[8px]'>
                        <p className='font-[600] text-[14px] leading-[21px] bg-[#EEEEEE] px-[8px] py-[4px]'>Beachfront</p>
                        <p className='font-[600] text-[14px] leading-[21px] bg-[#EEEEEE] px-[8px] py-[4px]'>Modern</p>
                        <p className='font-[600] text-[14px] leading-[21px] bg-[#EEEEEE] px-[8px] py-[4px]'>Spacious</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-x-[32px] gap-y-[32px] lg:gap-x-[100px]'>
                    <div className='flex flex-col gap-y-[8px]'>
                        <p className='font-[700] text-[18px] leading-[25px]'>Client</p>
                        <p className='font-[400] text-[16px] leading-[24px]'>John Doe</p>
                    </div>
                    <div className='flex flex-col gap-y-[8px]'>
                        <p className='font-[700] text-[18px] leading-[25px]'>Date</p>
                        <p className='font-[400] text-[16px] leading-[24px]'>March 2023</p>
                    </div>
                    <div className='flex flex-col gap-y-[8px]'>
                        <p className='font-[700] text-[18px] leading-[25px]'>Location</p>
                        <p className='font-[400] text-[16px] leading-[24px]'>Bali, Indonesia</p>
                    </div>
                    <div className='flex flex-col gap-y-[8px]'>
                        <p className='font-[700] text-[18px] leading-[25px]'>Price</p>
                        <p className='font-[400] text-[16px] leading-[24px]'>$3,000,000</p>
                    </div>
                </div>
            </div>
            <Image
                width={1240}
                height={520}
                src={"/images/home1.png"}
                alt="about"
                className="w-full mt-[48px] lg:mt-[84px]"

            />

            <div className='mt-[100px]  lg:mt-[224px] flex flex-col lg:flex-row lg:gap-x-[80px] '>
                <div className='flex flex-col gap-y-[20px] lg:w-[464px] w-full '>
                    <p className='font-[700] text-[36px] leading-[43px]'>Stunning Property with Luxurious Amenities</p>
                    <div className='flex flex-col gap-y-[16px]'>
                        <p className='font-[400] text-[16px] leading-[24px]'>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='font-[400] text-[16px] leading-[24px]'>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                        <p className='font-[400] text-[16px] leading-[24px]'>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[24px] mt-[48px] lg:mt-0">
                    <Image
                        width={335}
                        height={335}
                        src={"/images/listhome1.png"}
                        alt="list1"
                        className="w-full h-[335px] lg:w-[768px] lg:h-[768px] rounded-[12px]"

                    />
                    <Image
                        width={335}
                        height={335}
                        src={"/images/listhome2.png"}
                        alt="list2"
                        className="w-full h-[335px] lg:w-[768px] lg:h-[768px] rounded-[12px]"

                    />
                    <Image
                        width={335}
                        height={335}
                        src={"/images/listhome3.png"}
                        alt="list3"
                        className="w-full h-[335px] lg:w-[768px] lg:h-[768px] rounded-[12px]"

                    />
                </div>
            </div>

            <div className='mt-[100px] lg:mt-[224px] flex flex-col lg:flex-row lg:gap-x-[80px]'>
                <div className="flex flex-col justify-center ">
                    <p className='font-[600] text-[16px] leading-[24px]'>Luxury</p>
                    <p className='font-[700] text-[36px] leading-[43px] mt-[12px]'>Experience the Perfect Blend of Comfort and Style</p>
                    <p className='font-[400] text-[16px] leading-[24px] mt-[20px]'>Welcome to our stunning property! With a beautiful image gallery, immersive virtual tour, and outstanding features, this is the perfect place to call home. Explore the spacious rooms, modern amenities, and convenient location that make this property truly exceptional.</p>
                    <div className='flex gap-x-[24px] mt-[24px] items-center'>
                        <Button className="bg-app-lightgreen rounded-[12px] text-[16px] font-[600] h-[48px]" aria-label="learn">Learn More</Button>
                        <div className="flex gap-x-[16px] items-center">
                            <p>Contact</p>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
                <Image
                    width={335}
                    height={335}
                    src={"/images/listhome1.png"}
                    alt="list1"
                    className="w-full h-[335px] lg:w-[605px] lg:h-[605px] rounded-[12px] mt-[48px] mb-[47px] lg:mb-[112px]"

                />
            </div>


        </div>
    )
}
