import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "About us ",
    description: "AyEstate is dedicated to helping you find the ideal property. With expert guidance and exclusive listings, we make your property search effortless and confident."
};
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