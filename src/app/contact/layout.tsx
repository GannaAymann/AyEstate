import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Contact us',
    description: 'Get in touch with AyEstate for questions, support, or feedback. Reach us through our contact form, email, or phone , we are here to help'
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}