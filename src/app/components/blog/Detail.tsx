"use client"
import { usePathname } from 'next/navigation'
import { article } from "../../../../public/Data/recentArticle.json"
import Image from 'next/image';
import React from 'react'
import Dash from '../../../../public/icons/Dash';
import { RecentArticles } from './RecentArticles';

export const Detail = () => {
    const pathname = usePathname()
    const id = pathname.split('/').pop();
    const data = article.find(item => item.id === id);

    return (
        <div className='flex flex-col items-center justify-center mt-[50px] lg:mt-[120px] '>
            <div className='px-[20px] lg:px-[100px] flex flex-col items-center justify-center'>
                <div className='flex gap-x-[12px] text-app-gray font-[400] text-[12px] lg:text-[18px] justify-center'>
                    <p>8 February 2024</p>
                    <p>.</p>
                    <p>Success Stories</p>
                </div>
                <p className='font-[700] text-[20px] lg:text-[30px] xl:text-[48px] xl:leading-[62px] leading-[26px] text-center mt-[24px] lg:mt-[30px]'>{data?.subtitle}</p>
                <p className='text-app-gray font-[400] text-[14px] lg:text-[18px] text-center mt-[12px] leading-[28px] lg:w-[761px] w-full '>It can be a challenge to maintain balanced, healthy eating when you work from home. Try these 10 quick tips for healthy eating habits.</p>
                <Image
                    width={1240}
                    height={260}
                    src={`${data?.imgsource}`}
                    alt={`${data?.imgsource}`}
                    className="w-full rounded-[16px] mt-[18px] lg:mt-[50px] lg:h-[660px]"

                />
                <div className='mt-[30px] lg:mt-[50px] flex flex-col gap-y-[50px] lg:gap-y-[70px] lg:px-[148px]'>
                    <p className='text-app-gray font-[400] text-[14px] lg:text-[18px] lg:leading-[28px] leading-[22px]'>Imagine one day living in a luxurious, spacious house with everything you could possibly want in life. Now contrast that with red and blue lights filling your home, with officers yelling and sirens blaring. Then, envision a SWAT team ripping you away from your parents.Although it seems far-fetched, this actually happened.


                        By all accounts, John was living a charmed “trust fund” life, but that was quickly all taken away from him. At age 10, that left John Mansor a ward of the state—orphaned and alone, with only his brother, David, alongside him. He’s spent the last 15-plus years climbing back to the top.</p>
                    <p className='text-app-gray font-[400] text-[14px] leading-[22px] lg:text-[18px] lg:leading-[28px]'>
                        Imagine one day living in a luxurious, spacious house with everything you could possibly want in life. Now contrast that with red and blue lights filling your home, with officers yelling and sirens blaring. Then, envision a SWAT team ripping you away from your parents. Although it seems far-fetched, this actually happened.


                        By all accounts, John was living a charmed “trust fund” life, but that was quickly all taken away from him. At age 10, that left John Mansor a ward of the state—orphaned and alone, with only his brother, David, alongside him. He’s spent the last 15-plus years climbing back to the top.
                    </p>
                </div>

                <div className='mt-[8px] lg:mt-[25px] lg:px-[148px]'>
                    <p className='text-[16px] lg:text-[32px] font-[700] lg:leading-[41px] leading-[20px]'>A Way Out: Focusing on What Can Be Controlled</p>
                    <p className='text-[14px] lg:text-[18px] lg:leading-[28px] font-[400] leading-[22px] mt-[12px] lg:mt-[24px] text-app-gray'>Living as a ward of the state, life was a real battle of survival for John as a child. As he entered middle school, an opportunity for a change of scenery changed his perspective on life. He was granted a scholarship to a sleepaway camp nestled in the Adirondack Mountains called the Raquette Lake Boys Camp.</p>
                    <div className='mt-[8px] lg:mt-[21px] flex flex-col gap-y-[30px]'>
                        <div className='flex flex-col gap-y-[12px] lg:gap-y-[24px]'>
                            <div className='flex gap-x-[6px] items-center'>
                                <Dash />
                                <p className='text-[16px] lg:text-[20px] font-[700] leading-[20px]'>Preparation Meets Opportunity</p>
                            </div>
                            <p className='text-app-gray text-[14px] lg:text-[18px] lg:leading-[28px] font-[400] leading-[22px]'>Upon graduating, the harsh reality of the job market hit him when many potential employers believed he lacked relevant experience for an entry-level finance job. Undeterred, John entered tech sales.
                                After some success, John realized something was missing and couldn’t figure out how to get back to the life he used to have as a kid.</p>
                        </div>
                        <div className='flex flex-col gap-y-[12px] lg:gap-y-[24px]'>
                            <div className='flex gap-x-[6px] items-center'>
                                <Dash />
                                <p className='text-[16px] lg:text-[20px] font-[700] leading-[20px]'>Luck or Fate? Becoming a Wholesaler</p>
                            </div>
                            <p className='text-app-gray text-[14px] lg:text-[18px] lg:leading-[28px] font-[400] leading-[22px]'>There’s a saying that “luck is when preparation meets opportunity.” This is the type of luck that those in search of financial freedom seek. They don’t wait for something good to happen—they find ways to stack the deck in their favor. That’s exactly what John did.
                                Once John set his sights on earning more, he began researching ways to create passive income, searching the internet for phrases like “how to build generational wealth.”</p>
                        </div>
                        <div className='flex flex-col gap-y-[12px] lg:gap-y-[24px]'>
                            <div className='flex gap-x-[6px] items-center'>
                                <Dash />
                                <p className='text-[16px] lg:text-[20px] font-[700] leading-[20px]'>The Value of Active Listening</p>
                            </div>
                            <p className='text-app-gray text-[14px] lg:text-[18px] lg:leading-[28px] font-[400] leading-[22px]'>
                                Early on, John realized that sales is fundamentally about active listening—a skill that involves understanding the other party’s needs, concerns, and motivations. With determination, grit, and an inherent knack for connecting with people on a genuine level, John recognized the power of emotional intelligence in real estate transactions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='lg:px-[148px]'>
                    <Image
                        width={335}
                        height={200}
                        src={`${data?.imgsource}`}
                        alt={`${data?.imgsource}`}
                        className="w-full rounded-[16px] mt-[96px] lg:mt-[21px] "

                    />
                    <p className='font-[700] text-[16px] lg:text-[32px] lg:leading-[41px] leading-[20px] mt-[30px]'>From $0 to $40 Million in Assets</p>
                    <p className='mt-[12px] lg:mt-[24px] text-app-gray font-[400] text-[14px] lg:text-[18px] lg:leading-[28px] leading-[22px]'>Taking down this eight-unit property marked a shift from quick, active income to a more strategic approach focused on creating sustainable wealth. With a keen eye for acquisitions and a knack for sourcing opportunities, John entered real estate with a commitment to invest back into the business.
                    </p>
                    <p className='mt-[12px] lg:mt-[50px] text-app-gray font-[400] text-[14px] lg:text-[18px] lg:leading-[28px] leading-[22px]'>The journey was one of bootstrapping, where each step forward was a lesson in sourcing, acquiring, and operating the acquired assets. This quickly led to rapid growth over a two-year period, where they would purchase RV parks and more multifamily properties, such as a 40-unit townhouse community on Cape Cod</p>
                </div>
            </div>


            <RecentArticles />
        </div>
    )
}
