import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../../../components/ui/button'

export const SideMenu = ({ setExpand, expand }: { setExpand: React.Dispatch<React.SetStateAction<boolean>>, expand: boolean }) => {
    const btnStyle = "text-app-gray text-[18px] leading-[23px]  bg-transparent p-0 font-semibold hover:bg-transparent"
    return (
        <div onMouseLeave={() => setExpand(false)}
            className={cn({
                'absolute z-30 flex h-full w-80 flex-col overflow-y-auto bg-white p-5 drop-shadow-lg':
                    true,
                '-translate-x-full opacity-0': !expand,
                'translate-x-0 opacity-100': expand,
                'transition-transform duration-300': true,

            })}
        >
            <div className=' flex flex-col'>
                <Button variant="ghost" className={btnStyle} >Home</Button>
                <Button variant="ghost" className={btnStyle} >Listings</Button>
                <Button variant="ghost" className={btnStyle} >Company</Button>
                <Button variant="ghost" className={btnStyle} >Blog</Button>
                <Button variant="ghost" className={btnStyle} >About Us</Button>
            </div>
        </div>
    )
}
