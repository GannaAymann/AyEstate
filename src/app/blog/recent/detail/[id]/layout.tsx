import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Recent detail',
    description: 'Read this detailed guide on how to invest in luxury villas. Discover tips, market trends, and strategies from industry experts.',
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