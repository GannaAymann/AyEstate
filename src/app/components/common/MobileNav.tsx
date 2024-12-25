import React from 'react'
import Menu from '../../../../public/icons/Menu'
import Logo from '../../../../public/icons/Logo'
import { Button } from '../../../components/ui/button';

export const MobileNav = ({ setExpand }: { setExpand: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    return (
        <div className='pt-[22px] justify-between flex flex-row px-4 bg-[#F6F3F3]'>
            <Button onClick={() => setExpand((prev: boolean) => !prev)} className='p-0 bg-transparent hover:bg-transparent'>
                <Menu />
            </Button>
            <Logo />


        </div>
    )
}
