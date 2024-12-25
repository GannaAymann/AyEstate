import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Faqs',
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