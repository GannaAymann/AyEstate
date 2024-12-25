import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Contact us',
    description: 'Get in touch with Aystate. Whether you have a question, need support, or want to provide feedback, we are here to help. Reach out to us through our contact form or via email and phone.'
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