import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Listing',
    description: 'Explore luxury villas for sale and rent on Aystate. Find the perfect villa with stunning designs, ideal locations, and top-tier amenities. Browse our collection and make your dream home a reality.',
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