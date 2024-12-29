import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Faqs',
    description: "Welcome to our FAQ page! Find answers to common questions about buying, selling, and renting. We provide the information you need to make informed decisions."
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