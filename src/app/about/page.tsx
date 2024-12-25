import React from 'react'
import { Info } from '../components/about/Info'
import { Services } from '../components/about/Services'
import { ProjectStart } from '../components/common/ProjectStart'
import { Achievement } from '../components/about/Achievement'

export default function page() {
    return (
        <div>
            <Info />
            <Services />
            <Achievement />
            <ProjectStart />
        </div>
    )
}