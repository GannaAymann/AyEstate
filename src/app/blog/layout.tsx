import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read this blog post to learn more about starting your career on AyEstate. Discover insights, tips, and ideas from the experts at Aystate ',

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