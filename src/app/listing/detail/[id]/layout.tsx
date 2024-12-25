import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Listing detail',
    description: 'Discover this stunning luxury villa in detail . Contact us for more details or to schedule a tour.',

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