import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Recent blog',
    description: 'Here there are a list of recent articles in AyEstate',

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