import React from 'react'
import { Help } from '../components/faqs/Help'
import { Website } from '../components/faqs/Website'
import { Contacts } from '../components/faqs/Contacts'


export default function page() {
    return (
        <div >
            <Help />
            <Website />
            <Contacts />
        </div>
    )
}