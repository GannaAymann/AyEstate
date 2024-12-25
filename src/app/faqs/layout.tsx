import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Faqs',
    description: "Welcome to our FAQ page! Here, you will find answers to some of the most common questions about our services. Whether you're buying, selling, or renting, we aim to provide you with all the information you need to make informed decisions"
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