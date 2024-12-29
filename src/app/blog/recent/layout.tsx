import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Recent blog',
    description: 'Explore a list of recent articles from AyEstate, featuring valuable insights and updates.',

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