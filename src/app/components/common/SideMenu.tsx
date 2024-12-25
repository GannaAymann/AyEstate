import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../../../components/ui/button'
import { useRouter } from 'next/navigation'
export const SideMenu = ({ setExpand, expand }: { setExpand: React.Dispatch<React.SetStateAction<boolean>>, expand: boolean }) => {
    const btnStyle = "text-app-gray text-[18px] leading-[23px]  bg-transparent p-0 font-semibold hover:bg-transparent"
    const router = useRouter();
    return (
        <div onMouseLeave={() => setExpand(false)}
            className={cn({
                'absolute z-30 flex h-fit w-80 flex-col overflow-y-auto bg-white p-5 drop-shadow-lg py-[20px] rounded-b-[10px]':
                    true,
                '-translate-x-full opacity-0': !expand,
                'translate-x-0 opacity-100': expand,
                'transition-transform duration-300': true,

            })}
        >
            <div className=' flex flex-col gap-y-[10px]'>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/")}>Home</Button>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/listing")}>Listings</Button>
                <Button variant="ghost" className={btnStyle} >Company</Button>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/blog")}>Blog</Button>
                <Button variant="ghost" className={btnStyle} onClick={() => router.push("/about")}>About Us</Button>
            </div>
        </div>
    )
}
