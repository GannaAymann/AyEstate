import React from 'react'
import { Button } from '../../../components/ui/button'
import Logo from "../../../../public/icons/Logo"
import { useRouter } from 'next/navigation'
export const NavBar = () => {
    const router = useRouter();
    const btnStyle = "text-app-gray xl:text-[18px] xl:leading-[23px]  bg-transparent p-0 font-semibold hover:bg-transparent text-[16px] leading-[18px] "
    return (
        <div className='h-[100px] flex justify-around  items-center bg-[#F6F3F3]'>
            <Logo />
            <div className='xl:gap-x-[50px] gap-x-[30px] flex flex-row '>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/")}>Home</Button>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/listing")}>Listings</Button>
                <Button variant="ghost" className={btnStyle} >Company</Button>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/blog")} >Blog</Button>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/about")} >About Us</Button>
            </div>
            <Button className='bg-app-lightgreen xl:px-[34px] xl:py-[18px] px-[28px] py-[16px] text-[16px] leading-[21px] text-black font-semibold rounded-[12px] hover:bg-app-lightgreen xl:w-[160px] xl:h-[56px] w-[150px] h-[45px]' onClick={() => router.push('/contact')}>
                Contact Us
            </Button>
        </div>
    )
}
