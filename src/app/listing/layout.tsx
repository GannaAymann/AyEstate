import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Listing',
    description: 'Explore luxury villas for sale and rent on AyEstate. Find the perfect villa with stunning designs, prime locations, and top-tier amenities. Make your dream home a reality.',
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