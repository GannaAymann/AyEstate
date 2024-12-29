import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Recent detail',
    description: "Read this guide on investing in luxury villas. Discover expert tips, market trends, and strategies to help you succeed in the luxury real estate market.",
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