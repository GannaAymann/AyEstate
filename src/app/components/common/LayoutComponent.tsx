'use client'
import { NavBar } from "./NavBar";
import { MobileNav } from "./MobileNav";
import { SideMenu } from "./SideMenu";
import useWindowSize from '@/hooks/useWindowSize';
import React, { useState } from 'react'

export const LayoutComponent = () => {
    const windowSize = useWindowSize();
    const [expand, setExpand] = useState<boolean>(false);
    return (
        <>
            {windowSize.width && windowSize.width > 768 ? (
                <NavBar />
            ) : (
                <>
                    <MobileNav setExpand={setExpand} />
                    {expand === true && (
                        <SideMenu setExpand={setExpand} expand={expand} />
                    )}

                </>
            )}
        </>
    )
}
